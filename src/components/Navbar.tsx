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
            <span className="font-sans text-2xl font-black tracking-tighter text-app-text-primary group-hover:text-app-accent-purple transition-colors uppercase leading-none">
              {navbarConfig.brand_name}
              <span className="text-app-accent-purple font-mono text-base font-bold">{navbarConfig.logo_domain}</span>
            </span>
            <span className="hidden sm:inline font-mono text-[10px] tracking-widest text-app-text-primary font-bold uppercase mt-1 bg-app-accent-green px-2">
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
                    isActive ? "text-app-accent-purple" : "text-app-text-primary hover:text-app-accent-purple"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-1.5 bg-app-accent-purple"
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
              className={`font-sans font-black text-xs tracking-tighter uppercase px-5 py-2.5 rounded-none border-4 ${
                currentPath === "/contatti"
                  ? "bg-app-accent-purple text-white border-app-text-primary"
                  : "border-app-text-primary text-app-text-primary hover:bg-app-accent-lime"
              } transition-all cursor-pointer flex items-center gap-1.5`}
            >
              Dialogo
              <ArrowUpRight size={16} strokeWidth={3} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-app-text-30 hover:text-app-accent-olive focus:outline-none cursor-pointer"
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
            <div className="px-6 py-4 space-y-3 bg-app-bg-60/95 backdrop-blur-lg">
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
                    className={`block w-full text-left py-4 px-4 border-4 border-app-text-primary font-sans font-black text-xl uppercase tracking-tighter transition-all cursor-pointer ${
                      isActive ? "bg-app-accent-purple text-white" : "bg-white text-app-text-primary hover:bg-app-accent-lime"
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
                  className="w-full font-sans font-black text-lg tracking-tighter uppercase text-center py-5 rounded-none bg-app-accent-green text-app-text-primary border-4 border-app-text-primary hover:bg-white transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  Inizia il Dialogo
                  <ArrowUpRight size={20} strokeWidth={3} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
