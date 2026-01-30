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
      "https://wa.me/5511996702111?text=Olá! Vim pelo site e gostaria de garantir meu *bônus exclusivo*! Poderia me ajudar?",
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative z-10 w-[85%] max-w-sm"
          >
            <div className="bg-secondary rounded-lg shadow-2xl border border-secondary-foreground/10 p-5 relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="Fechar"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-display font-semibold text-secondary-foreground pr-6">
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
                <ul className="space-y-2">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-2.5 w-2.5 text-primary" />
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
                  size="default"
                  className="w-full mt-2"
                  onClick={handleWhatsApp}
                >
                  Falar com Especialista Agora!
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
