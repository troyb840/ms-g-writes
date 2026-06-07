import Link from "next/link";
import { Heart } from "lucide-react";

export const metadata = { title: "Privacy Policy · MsGwrites.com" };

export default function PrivacyPage() {
  return (
    <main>
      <section className="panel-peach py-16 text-center">
        <div className="section-narrow">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Heart size={12} fill="currentColor" className="text-coral" />
            <p className="eyebrow">Legal</p>
          </div>
          <h1 className="font-display text-3xl text-olive md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-terracotta/55">
            Last updated: May 2026
          </p>
        </div>
      </section>

      <section className="py-section">
        <div className="section-narrow prose-content">
          <div className="space-y-8 text-sm leading-relaxed text-terracotta/80">

            <div className="space-y-3">
              <h2 className="font-display text-xl text-olive">What We Collect</h2>
              <p>
                MsGwrites.com collects only the information you voluntarily provide —
                such as your name and email address when you sign up for the newsletter
                or submit a contact form. We do not sell, trade, or share your personal
                information with third parties for marketing purposes.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-olive">Newsletter</h2>
              <p>
                If you subscribe to the newsletter, your name and email are stored with
                our email service provider (ConvertKit/Kit). You can unsubscribe at any
                time using the link in any email we send. We will never spam you.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-olive">Contact & Booking Forms</h2>
              <p>
                Form submissions are processed through Formspree and stored securely.
                We use your contact information solely to respond to your inquiry. We
                do not add you to any mailing list without your explicit consent.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-olive">Cookies & Analytics</h2>
              <p>
                This site may use basic analytics to understand how visitors find and
                use the site. No personally identifiable information is collected
                through analytics. We use cookies only as necessary for the site to
                function.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-olive">Free Downloads</h2>
              <p>
                Resources are free to download and do not require an account or email
                address. We never gate content behind a required sign-up.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-olive">Children's Privacy</h2>
              <p>
                MsGwrites.com does not knowingly collect personal information from
                children under 13. If you believe a child has submitted personal
                information, please contact us and we will promptly delete it.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-olive">Contact</h2>
              <p>
                Questions about this policy?{" "}
                <Link href="/contact" className="text-coral underline underline-offset-2 hover:text-coral-400">
                  Reach out here
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
