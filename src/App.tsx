import { useState, useEffect } from "react";
import { SiteConfig, SitemapItem } from "./types";
import siteConfigData from "./site-config.json";

// Components
import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import AIAssistant from "./components/AIAssistant";

// Views
import HomeView from "./components/HomeView";
import ChiSonoView from "./components/ChiSonoView";
import ServiziView from "./components/ServiziView";
import SocialLeadView from "./components/SocialLeadView";
import ContattiView from "./components/ContattiView";
import BlogListView from "./components/BlogListView";
import BlogPostView from "./components/BlogPostView";
import PrivacyView from "./components/PrivacyView";
import CookieView from "./components/CookieView";
import NotFoundView from "./components/NotFoundView";

import { motion, AnimatePresence } from "motion/react";

// Safe casting to SiteConfig type
const config = siteConfigData as unknown as SiteConfig;

export default function App() {
  // Inject theme variables
  useEffect(() => {
    const root = document.documentElement;
    const { palette } = config.theme;

    root.style.setProperty("--text-primary", palette.text_primary);
    root.style.setProperty("--text-secondary", palette.text_secondary);
    root.style.setProperty("--text-tertiary", palette.text_tertiary);
    root.style.setProperty("--bg-main", palette.bg_main);
    root.style.setProperty("--bg-dark", palette.bg_dark);
    root.style.setProperty("--btn-primary-bg", palette.btn_primary_bg);
    root.style.setProperty("--btn-primary-text", palette.btn_primary_text);
    root.style.setProperty("--btn-secondary-bg", palette.btn_secondary_bg);
    root.style.setProperty("--btn-secondary-text", palette.btn_secondary_text);
    root.style.setProperty("--btn-tertiary-bg", palette.btn_tertiary_bg);
    root.style.setProperty("--btn-tertiary-text", palette.btn_tertiary_text);
    root.style.setProperty("--accent-primary", palette.accent_primary);
    root.style.setProperty("--accent-secondary", palette.accent_secondary);
    root.style.setProperty("--accent-slime", palette.accent_slime);
    root.style.setProperty("--hover-primary", palette.hover_primary);
    root.style.setProperty("--hover-secondary", palette.hover_secondary);
    root.style.setProperty("--border-main", palette.border_main);
    root.style.setProperty("--border-accent", palette.border_accent);
  }, []);

  // Hash Routing Setup for maximum reliability in iFrames & previews
  const [currentPath, setCurrentPath] = useState<string>(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#")) {
      return hash.slice(1);
    }
    return "/";
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith("#")) {
        setCurrentPath(hash.slice(1));
      } else {
        setCurrentPath("/");
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
    setCurrentPath(path);
    // Smooth instant scroll to top of page
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // Extract SEO parameters corresponding to active page
  const activeSitemap = config.sitemap.find(
    (item: SitemapItem) => {
      if (item.path === "/blog" && currentPath.startsWith("/blog/")) {
        return false; // Let blog post view handle its own SEO
      }
      return item.path === currentPath;
    }
  ) || {
    id: "not-found",
    name: "Pagina Non Trovata",
    path: "/404",
    excludeFromNavbar: true,
    seo: {
      title: "Pagina Non Trovata | FacilissimoWeb",
      description: "Si è verificato un errore, la pagina che cercavi non esiste.",
      ogTitle: "Pagina Non Trovata | FacilissimoWeb",
      ogDescription: "Si è verificato un errore, la pagina che cercavi non esiste."
    }
  };

  // Render correct view block
  const renderActiveView = () => {
    switch (currentPath) {
      case "/":
        return <HomeView config={config} onNavigate={navigate} />;
      case "/chi-sono":
        return <ChiSonoView config={config} onNavigate={navigate} />;
      case "/servizi":
        return <ServiziView config={config} onNavigate={navigate} />;
      case "/social-lead-generation":
        return <SocialLeadView config={config} onNavigate={navigate} />;
      case "/contatti":
        return <ContattiView config={config} />;
      case "/blog":
        return <BlogListView onNavigate={navigate} />;
      case "/privacy":
        return <PrivacyView />;
      case "/cookie":
        return <CookieView />;
      default:
        if (currentPath.startsWith("/blog/")) {
          const slug = currentPath.replace("/blog/", "");
          return <BlogPostView slug={slug} onNavigate={navigate} />;
        }
        return <NotFoundView onNavigate={navigate} />;
    }
  };

  return (
    <div
      id="root-app-layout"
      className="min-h-screen bg-app-bg-main text-app-text-primary flex flex-col selection:bg-app-accent-primary selection:text-app-bg-main"
    >
      {/* SEO Element updating titles dynamically based on active route */}
      {!currentPath.startsWith("/blog/") && <SEO metadata={activeSitemap.seo} />}

      {/* Shared Navbar */}
      <Navbar config={config} currentPath={currentPath} onNavigate={navigate} />

      {/* Main Page Canvas with smooth enter/fade transition */}
      <main id="main-content" className="flex-grow pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Shared Footer */}
      <Footer config={config} onNavigate={navigate} />

      {/* Ethical Cookie Consent Banner */}
      <CookieBanner onNavigate={navigate} />

      {/* AI Assistant Chatbot */}
      <AIAssistant />
    </div>
  );
}
