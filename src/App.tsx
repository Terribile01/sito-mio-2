import { useState, useEffect } from "react";
import { SiteConfig, SitemapItem } from "./types";
import siteConfigData from "./site-config.json";

// Components
import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

// Views
import HomeView from "./components/HomeView";
import ChiSonoView from "./components/ChiSonoView";
import ServiziView from "./components/ServiziView";
import SocialLeadView from "./components/SocialLeadView";
import ContattiView from "./components/ContattiView";
import PrivacyView from "./components/PrivacyView";
import CookieView from "./components/CookieView";
import NotFoundView from "./components/NotFoundView";

import { motion, AnimatePresence } from "motion/react";

// Safe casting to SiteConfig type
const config = siteConfigData as unknown as SiteConfig;

export default function App() {
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
    (item: SitemapItem) => item.path === currentPath
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
      case "/privacy":
        return <PrivacyView />;
      case "/cookie":
        return <CookieView />;
      default:
        return <NotFoundView onNavigate={navigate} />;
    }
  };

  return (
    <div
      id="root-app-layout"
      className="min-h-screen bg-[#E2DDD3] text-[#2D2B28] flex flex-col selection:bg-[#756D52] selection:text-[#E2DDD3]"
    >
      {/* SEO Element updating titles dynamically based on active route */}
      <SEO metadata={activeSitemap.seo} />

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
    </div>
  );
}
