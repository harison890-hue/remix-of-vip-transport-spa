import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const alreadyShown = sessionStorage.getItem("exitPopupShown");
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5511945339917?text=Olá! Gostaria de falar com um especialista sobre transporte executivo.",
      "_blank"
    );
    setIsVisible(false);
  };

  const benefits = [
    "Atendimento 24h",
    "Frota de luxo blindados e convencionais",
    "Motoristas VIP qualificados",
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md"
          >
            <div className="bg-secondary rounded-lg shadow-2xl border border-secondary-foreground/10 p-6 md:p-8 relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="Fechar"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Content */}
              <div className="space-y-5">
                <h3 className="text-2xl font-display font-semibold text-secondary-foreground">
                  Antes de Sair...
                </h3>

                <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                  Fale agora com nossa Central de Reservas e garanta um bônus exclusivo!
                </p>

                <p className="text-secondary-foreground/70 text-sm leading-relaxed">
                  Você está a um clique de garantir{" "}
                  <span className="text-primary font-medium">
                    uma experiência de transporte executivo com conforto, pontualidade e segurança.
                  </span>
                </p>

                {/* Benefits */}
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm text-secondary-foreground/90">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant="bronze"
                  size="lg"
                  className="w-full mt-2"
                  onClick={handleWhatsApp}
                >
                  Fale com um especialista agora!
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
