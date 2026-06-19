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
    <footer id="main-footer" className="bg-app-bg-dark border-t-4 border-app-text-primary text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand block */}
          <div className="md:col-span-6 flex flex-col space-y-6">
            <button
              id="footer-brand-btn"
              onClick={() => onNavigate("/")}
              className="flex flex-col items-start focus:outline-none text-left cursor-pointer group"
            >
              <span className="font-sans text-3xl font-black tracking-tighter text-white group-hover:text-app-accent-purple transition-colors uppercase leading-none">
                {navbarConfig.brand_name}
                <span className="text-app-accent-purple font-mono text-xl font-bold">.it</span>
              </span>
              <span className="font-mono text-xs tracking-widest text-app-accent-green font-bold uppercase mt-2">
                {navbarConfig.tagline}
              </span>
            </button>
            <p className="font-sans text-lg text-white/70 font-bold leading-tight max-w-sm uppercase">
              {footerConfig.tagline}
            </p>
          </div>

          {/* Navigation block */}
          <div className="md:col-span-3">
            <h4 id="footer-nav-title" className="font-sans font-black text-app-accent-orange text-sm uppercase tracking-widest mb-6">
              Navigazione
            </h4>
            <ul className="space-y-3">
              {mainItems.map((item) => (
                <li key={item.id}>
                  <button
                    id={`footer-nav-to-${item.id}`}
                    onClick={() => onNavigate(item.path)}
                    className="font-sans text-sm text-white font-bold hover:text-app-accent-purple transition-all text-left cursor-pointer uppercase tracking-tighter"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Policy block */}
          <div className="md:col-span-3">
            <h4 id="footer-legal-title" className="font-sans font-black text-app-accent-lime text-sm uppercase tracking-widest mb-6">
              {footerConfig.legal_links_title}
            </h4>
            <ul className="space-y-3">
              {legalItems.map((item) => (
                <li key={item.id}>
                  <button
                    id={`footer-nav-to-${item.id}`}
                    onClick={() => onNavigate(item.path)}
                    className="font-sans text-sm text-white font-bold hover:text-app-accent-purple transition-all text-left cursor-pointer uppercase tracking-tighter"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t-4 border-app-text-primary pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p id="copyright-text" className="font-mono text-[10px] text-white/50 font-bold uppercase tracking-widest">
            {footerConfig.copyright}
          </p>
          <p id="author-label" className="font-mono text-[10px] text-app-accent-green font-bold uppercase tracking-widest">
            Umanesimo Digitale per la Microimprenditoria
          </p>
        </div>
      </div>
    </footer>
  );
}
