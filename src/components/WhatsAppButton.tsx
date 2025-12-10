import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const handleClick = () => {
    window.open(
      "https://wa.me/5511999999999?text=Olá! Gostaria de solicitar uma cotação para transporte executivo.",
      "_blank"
    );
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-elegant">
        Fale Conosco
      </span>
    </motion.button>
  );
}
