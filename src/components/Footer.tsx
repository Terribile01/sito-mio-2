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
    <footer id="main-footer" className="bg-[#E2DDD3] border-t border-[#454340]/10 text-[#2D2B28] pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          
          {/* Brand block (6 cols on lg) */}
          <div className="md:col-span-6 flex flex-col space-y-4">
            <button
              id="footer-brand-btn"
              onClick={() => onNavigate("/")}
              className="flex flex-col items-start focus:outline-none text-left cursor-pointer group"
            >
              <span className="font-sans text-xl font-bold tracking-tight text-[#454340] group-hover:text-[#756D52] transition-colors">
                {navbarConfig.brand_name}
                <span className="text-[#9C9478] font-mono text-sm font-normal">.it</span>
              </span>
              <span className="font-mono text-[10px] tracking-wider text-[#756D52] uppercase mt-0.5">
                {navbarConfig.tagline}
              </span>
            </button>
            <p className="font-sans text-sm text-[#2D2B28]/80 leading-relaxed max-w-sm">
              {footerConfig.tagline}
            </p>
          </div>

          {/* Navigation block (3 cols) */}
          <div className="md:col-span-3">
            <h4 id="footer-nav-title" className="font-sans font-bold text-[#454340] text-xs uppercase tracking-widest mb-4">
              Navigazione
            </h4>
            <ul className="space-y-2">
              {mainItems.map((item) => (
                <li key={item.id}>
                  <button
                    id={`footer-nav-to-${item.id}`}
                    onClick={() => onNavigate(item.path)}
                    className="font-sans text-sm text-[#2D2B28] hover:text-[#756D52] transition-colors text-left cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Policy block (3 cols) */}
          <div className="md:col-span-3">
            <h4 id="footer-legal-title" className="font-sans font-bold text-[#454340] text-xs uppercase tracking-widest mb-4">
              {footerConfig.legal_links_title}
            </h4>
            <ul className="space-y-2">
              {legalItems.map((item) => (
                <li key={item.id}>
                  <button
                    id={`footer-nav-to-${item.id}`}
                    onClick={() => onNavigate(item.path)}
                    className="font-sans text-sm text-[#2D2B28] hover:text-[#756D52] transition-colors text-left cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-[#454340]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p id="copyright-text" className="font-sans text-xs text-[#2D2B28]/60">
            {footerConfig.copyright}
          </p>
          <p id="author-label" className="font-mono text-[10px] text-[#756D52]/60 uppercase tracking-widest">
            Umanesimo Digitale per la Microimprenditoria Locale & Online
          </p>
        </div>
      </div>
    </footer>
  );
}
