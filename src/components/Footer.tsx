import { SiteConfig } from "../types";

interface FooterProps {
  config: SiteConfig;
  onNavigate: (path: string) => void;
}

export default function Footer({ config, onNavigate }: FooterProps) {
  const { components, sitemap } = config;
  const footerConfig = components.comune_footer;
  const navbarConfig = components.navbar;

  // Active sitemap items for simple footer linking
  const mainItems = sitemap.filter((item) => !item.excludeFromNavbar);
  const legalItems = sitemap.filter((item) => item.excludeFromNavbar && item.id !== "not-found");

  return (
    <footer id="main-footer" className="bg-[#050505] border-t border-white/5 text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-app-accent-primary/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Brand block */}
          <div className="md:col-span-6 flex flex-col space-y-8">
            <button
              id="footer-brand-btn"
              onClick={() => onNavigate("/")}
              className="flex flex-col items-start focus:outline-none text-left cursor-pointer group"
            >
              <span className="font-sans text-3xl font-black tracking-tighter text-white group-hover:text-app-accent-primary transition-colors uppercase leading-none">
                {navbarConfig.brand_name}
                <span className="text-app-accent-primary font-mono text-xl font-bold">.it</span>
              </span>
              <span className="font-mono text-[10px] tracking-[0.3em] text-white/40 font-bold uppercase mt-2">
                {navbarConfig.tagline}
              </span>
            </button>
            <p className="font-sans text-base text-white/50 leading-relaxed max-w-sm uppercase tracking-tight">
              {footerConfig.tagline}
            </p>
          </div>

          {/* Navigation block */}
          <div className="md:col-span-3">
            <h4 id="footer-nav-title" className="font-mono text-[10px] font-black text-app-accent-secondary uppercase tracking-[0.2em] mb-8">
              Navigazione
            </h4>
            <ul className="space-y-4">
              {mainItems.map((item) => (
                <li key={item.id}>
                  <button
                    id={`footer-nav-to-${item.id}`}
                    onClick={() => onNavigate(item.path)}
                    className="font-sans text-xs text-white/70 hover:text-app-accent-primary transition-all text-left cursor-pointer uppercase tracking-widest"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Policy block */}
          <div className="md:col-span-3">
            <h4 id="footer-legal-title" className="font-mono text-[10px] font-black text-app-tertiary uppercase tracking-[0.2em] mb-8">
              {footerConfig.legal_links_title}
            </h4>
            <ul className="space-y-4">
              {legalItems.map((item) => (
                <li key={item.id}>
                  <button
                    id={`footer-nav-to-${item.id}`}
                    onClick={() => onNavigate(item.path)}
                    className="font-sans text-xs text-white/70 hover:text-app-accent-primary transition-all text-left cursor-pointer uppercase tracking-widest"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/5 pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p id="copyright-text" className="font-mono text-[9px] text-white/30 uppercase tracking-[0.2em]">
            {footerConfig.copyright}
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-app-accent-secondary animate-pulse shadow-[0_0_8px_rgba(0,245,255,0.8)]" />
            <p id="author-label" className="font-mono text-[9px] text-white/30 uppercase tracking-[0.2em]">
              Sistemi Digitali Integrati
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
