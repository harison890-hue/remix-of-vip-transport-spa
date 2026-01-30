import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    const pathname = location.pathname;

    // Sempre exibe nas páginas legais (para qualquer visitante), conforme solicitado.
    const alwaysShowOnLegalPages =
      pathname === "/termos-de-uso" || pathname === "/politica-de-privacidade";

    if (alwaysShowOnLegalPages || !consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setIsVisible(false);
  };

  const handleConfigurePreferences = () => {
    localStorage.setItem("cookieConsent", "essential");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-[9999]"
        >
          {/* Gradient border top */}
          <div className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          {/* Main banner */}
          <div className="bg-secondary text-secondary-foreground py-4 px-4 md:px-8">
            <div className="container-premium">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Text with link */}
                <p className="text-sm text-secondary-foreground/80 text-center md:text-left">
                  Utilizamos cookies para otimizar sua experiência e análises.{" "}
                  <Link 
                    to="/politica-de-privacidade" 
                    className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
                  >
                    Política de Cookies
                  </Link>
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <button
                    onClick={handleAcceptAll}
                    className="px-5 py-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium rounded transition-colors"
                  >
                    Aceitar Todos
                  </button>
                  <button
                    onClick={handleConfigurePreferences}
                    className="px-5 py-2 border border-primary/60 text-primary hover:bg-primary/10 text-sm font-medium rounded transition-colors"
                  >
                    Configurar Preferências
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
