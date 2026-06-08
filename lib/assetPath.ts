/**
 * Prepend the Next.js basePath to a public asset URL.
 * On GitHub Pages the basePath is /ms-g-writes; in production it's empty.
 * next/image handles this automatically, but plain <a href> links to /public
 * assets need this helper so PDF links etc. work on the subdirectory deploy.
 */
export function assetPath(src: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${src}`;
}
