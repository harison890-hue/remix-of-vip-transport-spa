import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setIsVisible(false);
  };

  const handleRejectAll = () => {
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
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container-premium">
            <div className="bg-card border border-border rounded-lg shadow-elegant p-6 md:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Icon & Content */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Cookie className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-medium text-foreground mb-2">
                      Utilizamos Cookies
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Utilizamos cookies para melhorar sua experiência de navegação,
                      personalizar conteúdo e analisar nosso tráfego. Ao clicar em
                      "Aceitar Todos", você consente com o uso de todos os cookies.
                    </p>
                    {showDetails && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="mt-4 pt-4 border-t border-border"
                      >
                        <p className="text-xs text-muted-foreground">
                          <strong>Cookies Essenciais:</strong> Necessários para o
                          funcionamento do site.
                          <br />
                          <strong>Cookies de Análise:</strong> Ajudam-nos a
                          entender como os visitantes interagem com o site.
                          <br />
                          <strong>Cookies de Marketing:</strong> Utilizados para
                          personalizar anúncios.
                        </p>
                      </motion.div>
                    )}
                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="text-sm text-primary hover:underline mt-2"
                    >
                      {showDetails ? "Ocultar detalhes" : "Ver mais detalhes"}
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                  <Button
                    variant="bronzeOutline"
                    size="default"
                    onClick={handleRejectAll}
                  >
                    Rejeitar
                  </Button>
                  <Button variant="bronze" size="default" onClick={handleAcceptAll}>
                    Aceitar Todos
                  </Button>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleRejectAll}
                  className="absolute top-4 right-4 lg:static text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Fechar"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
