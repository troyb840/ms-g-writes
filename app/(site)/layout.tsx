import { sanityClient, layoutSettingsQuery } from "@/lib/sanity";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

type Socials = {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
  youtube?: string;
  pinterest?: string;
  linkedin?: string;
};

type LayoutSettings = {
  footerScripture?: string;
  socials?: Socials;
};

// ISR — settings revalidate every 60s so Studio edits propagate to header/footer
export const revalidate = 60;

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await sanityClient.fetch<LayoutSettings | null>(
    layoutSettingsQuery,
  );

  return (
    <>
      <Header socials={settings?.socials} />
      <div className="flex-1">{children}</div>
      <Footer
        socials={settings?.socials}
        footerScripture={settings?.footerScripture}
      />
    </>
  );
}
