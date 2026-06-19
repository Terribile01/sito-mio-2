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
            <span className="font-sans text-2xl font-black tracking-tighter text-white group-hover:text-app-accent-primary transition-colors uppercase leading-none">
              {navbarConfig.brand_name}
              <span className="text-app-accent-primary font-mono text-base font-bold">{navbarConfig.logo_domain}</span>
            </span>
            <span className="hidden sm:inline font-mono text-[9px] tracking-[0.2em] text-white/40 font-bold uppercase mt-1">
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
                  className={`relative py-2 font-sans font-black text-xs uppercase tracking-tighter transition-all cursor-pointer ${
                    isActive ? "text-app-accent-primary" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-app-accent-primary shadow-[0_0_8px_rgba(155,92,255,0.8)]"
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
              className={`font-sans font-black text-xs tracking-tighter uppercase px-5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                currentPath === "/contatti"
                  ? "bg-app-accent-primary text-app-bg-main shadow-[0_0_20px_rgba(155,92,255,0.4)]"
                  : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
              }`}
            >
              Dialogo
              <ArrowUpRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-app-accent-primary focus:outline-none cursor-pointer"
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
            className={`md:hidden bg-app-bg-main/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden`}
          >
            <div className="px-6 py-8 space-y-4">
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
                    className={`block w-full text-left py-4 px-6 rounded-2xl font-sans font-black text-xl uppercase tracking-tighter transition-all cursor-pointer ${
                      isActive ? "bg-app-accent-primary text-app-bg-main" : "text-white/70 hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
              
              <div className="pt-4">
                <button
                  id="mobile-navbar-cta-btn"
                  onClick={() => {
                    onNavigate("/contatti");
                    setIsOpen(false);
                  }}
                  className="w-full font-sans font-black text-lg tracking-tighter uppercase text-center py-5 rounded-2xl bg-app-accent-secondary text-app-bg-main shadow-[0_0_30px_rgba(0,245,255,0.3)] transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  Inizia il Dialogo
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
