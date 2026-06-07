import Link from "next/link";
import { Heart } from "lucide-react";

export const metadata = { title: "Terms of Use · MsGwrites.com" };

export default function TermsPage() {
  return (
    <main>
      <section className="panel-peach py-16 text-center">
        <div className="section-narrow">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Heart size={12} fill="currentColor" className="text-coral" />
            <p className="eyebrow">Legal</p>
          </div>
          <h1 className="font-display text-3xl text-olive md:text-4xl">
            Terms of Use
          </h1>
          <p className="mt-3 text-sm text-terracotta/55">
            Last updated: May 2026
          </p>
        </div>
      </section>

      <section className="py-section">
        <div className="section-narrow">
          <div className="space-y-8 text-sm leading-relaxed text-terracotta/80">

            <div className="space-y-3">
              <h2 className="font-display text-xl text-olive">Use of This Site</h2>
              <p>
                By accessing MsGwrites.com, you agree to use this site for lawful,
                personal, non-commercial purposes. You may not reproduce, distribute,
                or use site content in any way that infringes on intellectual property
                rights without written permission.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-olive">Free Resources</h2>
              <p>
                Downloadable resources (printables, guides, activity sheets) are offered
                free of charge for personal and classroom use. They may not be resold,
                repackaged, or redistributed commercially without express written consent.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-olive">Intellectual Property</h2>
              <p>
                All written content, illustrations, brand assets, and original designs
                on this site are the property of Genicia Corney / MsGwrites.com unless
                otherwise noted. "Ms. G" is a pen name and brand of Genicia Corney.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-olive">External Links</h2>
              <p>
                This site may link to third-party retailers, platforms, or services.
                We are not responsible for the content or privacy practices of external
                sites. Links to Amazon, Barnes & Noble, and others are provided for
                convenience.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-olive">Disclaimer</h2>
              <p>
                Content on this site is provided for informational and inspirational
                purposes. MsGwrites.com makes no warranties, expressed or implied,
                regarding the accuracy or completeness of any information on this site.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-olive">Changes to These Terms</h2>
              <p>
                These terms may be updated occasionally. Continued use of the site
                after any changes constitutes your acceptance of the new terms.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-olive">Contact</h2>
              <p>
                Questions?{" "}
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
