import FooterBrand from "./footer-brand";
import FooterLinks from "./footer-links";
import FooterNewsletter from "./footer-newsletter";
import FooterSocials from "./footer-socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#091210] text-white">
      {/* Gradient Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* CTA */}
        <div className="mb-20 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent">
                Uptick Invest
              </p>

              <h2 className="text-4xl font-semibold leading-tight text-white">
                Build wealth with intelligent investing infrastructure.
              </h2>

              <p className="mt-4 max-w-xl text-white/60">
                Powerful analytics, portfolio management, and investment tools
                built for modern investors and financial growth.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="h-12 rounded-2xl bg-accent px-6 text-sm font-medium text-black transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(16,185,129,0.35)]">
                Start Investing
              </button>

              <button className="h-12 rounded-2xl border border-white/10 bg-white/5 px-6 text-sm font-medium text-white backdrop-blur-xl transition-all hover:border-accent/40 hover:bg-white/10">
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr_1fr]">
          <FooterBrand />

          <FooterLinks />

          <FooterNewsletter />
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm text-white/50">
              © {currentYear} Uptick Invest. All rights reserved.
            </p>

            <p className="mt-1 text-xs text-white/30">
              Built for the future of intelligent investing.
            </p>
          </div>

          <FooterSocials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;