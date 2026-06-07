import { NextRequest, NextResponse } from "next/server";

// POST /api/subscribe
// Body: { firstName: string; email: string }
// Subscribes to the ConvertKit form defined by NEXT_PUBLIC_CONVERTKIT_FORM_ID.

export async function POST(req: NextRequest) {
  const { firstName, email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const formId = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
  const apiKey = process.env.CONVERTKIT_API_KEY;

  // If not configured yet, return a graceful mock success so the UI still works
  if (!formId || !apiKey) {
    console.warn(
      "[subscribe] ConvertKit not configured — returning mock success. " +
        "Add NEXT_PUBLIC_CONVERTKIT_FORM_ID and CONVERTKIT_API_KEY to .env.local."
    );
    return NextResponse.json({ success: true, mock: true });
  }

  try {
    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: apiKey,
          email,
          first_name: firstName ?? "",
        }),
      }
    );

    if (!res.ok) {
      const body = await res.text();
      console.error("[subscribe] ConvertKit error:", res.status, body);
      return NextResponse.json(
        { error: "Subscription failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[subscribe] fetch error:", err);
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}
