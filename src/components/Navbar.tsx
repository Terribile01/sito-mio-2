import { useState } from "react";
import { SitemapItem, SiteConfig } from "../types";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  config: SiteConfig;
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Navbar({ config, currentPath, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { sitemap, components, theme } = config;
  const navbarConfig = components.navbar;

  const navItems = sitemap.filter((item) => !item.excludeFromNavbar);

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 ${theme.navbar.background} ${theme.navbar.blur} border-b ${theme.navbar.border} transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <button
            id="brand-logo-btn"
            onClick={() => {
              onNavigate("/");
              setIsOpen(false);
            }}
            className="flex flex-col items-start focus:outline-none group text-left cursor-pointer"
          >
            <span className="font-sans text-xl font-bold tracking-tight text-[#454340] group-hover:text-[#756D52] transition-colors">
              {navbarConfig.brand_name}
              <span className="text-[#9C9478] font-mono text-sm font-normal">.it</span>
            </span>
            <span className="hidden sm:inline font-mono text-[10px] tracking-wider text-[#756D52] uppercase mt-0.5">
              {navbarConfig.tagline}
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  id={`nav-item-${item.id}`}
                  key={item.id}
                  onClick={() => onNavigate(item.path)}
                  className={`relative py-2 font-sans font-medium text-sm transition-colors cursor-pointer ${
                    isActive ? "text-[#756D52]" : "text-[#2D2B28] hover:text-[#756D52]"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#756D52]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}

            {/* Inizia il Dialogo CTA in Navbar */}
            <button
              id="navbar-cta-btn"
              onClick={() => onNavigate("/contatti")}
              className={`font-sans font-medium text-xs tracking-wider uppercase px-4 py-2.5 rounded-md border ${
                currentPath === "/contatti"
                  ? "bg-[#756D52] text-[#E2DDD3]"
                  : "border-[#756D52] text-[#756D52] hover:bg-[#756D52] hover:text-[#E2DDD3]"
              } transition-all duration-300 flex items-center gap-1.5 cursor-pointer`}
            >
              Inizia il Dialogo
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#2D2B28] hover:text-[#756D52] focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`md:hidden ${theme.navbar.background} border-b ${theme.navbar.border} overflow-hidden`}
          >
            <div className="px-6 py-4 space-y-3 bg-[#E2DDD3]/95 backdrop-blur-lg">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <button
                    id={`mobile-nav-item-${item.id}`}
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.path);
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left py-2 px-3 rounded-md font-sans font-semibold text-base transition-colors cursor-pointer ${
                      isActive ? "bg-[#756D52]/10 text-[#756D52]" : "text-[#2D2B28] hover:bg-[#756D52]/5 hover:text-[#756D52]"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              
              <div className="pt-2 border-t border-[#454340]/10">
                <button
                  id="mobile-navbar-cta-btn"
                  onClick={() => {
                    onNavigate("/contatti");
                    setIsOpen(false);
                  }}
                  className="w-full font-sans font-semibold text-sm tracking-wider uppercase text-center py-3 rounded-md bg-[#756D52] text-[#E2DDD3] hover:bg-[#454340] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Inizia il Dialogo
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
