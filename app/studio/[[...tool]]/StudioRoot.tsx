"use client";

// Client wrapper for Sanity Studio.
//
// Why this file exists: importing `sanity.config` evaluates the `sanity`
// package, which calls React.createContext at the top level. That API isn't
// available in the React Server Components build, so the import must happen
// on the client. The sibling page.tsx stays a server module so it can keep
// exporting `metadata` and `viewport` from `next-sanity/studio`.

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export function StudioRoot() {
  return <NextStudio config={config} />;
}
