// Sanity Studio mounts at /studio. Genicia logs in here to manage all content.
//
// This file is a server module so it can re-export `metadata` and `viewport`
// from next-sanity/studio. The actual Studio render + sanity.config import
// live in ./StudioRoot.tsx (a client component) — see that file for why.

import { StudioRoot } from "./StudioRoot";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <StudioRoot />;
}
