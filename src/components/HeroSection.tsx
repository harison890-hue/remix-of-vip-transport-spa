import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 175.216 175.552"
    className="h-5 w-5"
    fill="currentColor"
  >
    <path d="M87.882 14.185c-40.626 0-73.682 33.056-73.682 73.682 0 13.017 3.388 25.639 9.818 36.808l-10.42 38.05 38.98-10.222c10.773 5.876 22.914 8.973 35.304 8.973 40.626 0 73.682-33.056 73.682-73.682s-33.056-73.61-73.682-73.61zm0 134.89c-11.694 0-23.14-3.191-33.063-9.23l-2.37-1.406-24.575 6.446 6.563-23.99-1.543-2.457c-6.65-10.577-10.164-22.817-10.164-35.436 0-36.737 29.888-66.625 66.625-66.625s66.625 29.888 66.625 66.625-29.416 66.073-66.098 66.073zm36.41-49.878c-1.995-.997-11.81-5.828-13.642-6.495-1.832-.667-3.165-.997-4.498 1-1.333 1.995-5.163 6.495-6.33 7.828-1.165 1.333-2.33 1.5-4.325.5-1.995-.997-8.42-3.103-16.037-9.898-5.93-5.287-9.933-11.817-11.1-13.812-1.165-1.995-.125-3.075.877-4.07.9-.897 1.995-2.33 2.993-3.495.997-1.165 1.33-1.995 1.995-3.33.667-1.333.335-2.498-.165-3.495-.5-.997-4.498-10.843-6.163-14.838-1.622-3.898-3.27-3.37-4.498-3.432-1.165-.057-2.498-.07-3.83-.07-1.333 0-3.495.5-5.328 2.495-1.832 1.995-6.995 6.83-6.995 16.658 0 9.828 7.163 19.323 8.16 20.658.997 1.333 14.09 21.52 34.135 30.18 4.768 2.058 8.49 3.287 11.39 4.21 4.785 1.52 9.14 1.305 12.583.79 3.838-.573 11.81-4.828 13.477-9.495 1.667-4.665 1.667-8.663 1.167-9.495-.5-.832-1.832-1.33-3.827-2.327z"/>
  </svg>
);
import heroCar from "@/assets/hero-car.jpg";

export function HeroSection() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5511996702111?text=Olá! Gostaria de solicitar uma cotação para transporte executivo.",
      "_blank"
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-background overflow-hidden pt-16 md:pt-8"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Veículo executivo de luxo Four Vip Transport"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/50 to-secondary/30" />
      </div>

      {/* Content */}
      <div className="relative container-premium section-padding pt-32 md:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary tracking-wide">
                  Transporte Executivo Premium
                </span>
              </motion.div>

              <h1 className="heading-display text-white text-balance">
                Seu Tempo.{" "}
                <span className="text-primary">Nossa Excelência.</span>
              </h1>

              <p className="text-xl md:text-2xl font-display text-white/80">
                Transporte Executivo com Padrão VIP
              </p>
            </div>

            <p className="text-premium text-white/70 max-w-lg">
              Experimente o mais alto padrão em mobilidade executiva. Pontualidade,
              discrição e conforto absoluto para executivos que valorizam cada
              segundo do seu tempo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="bronze"
                size="xl"
                onClick={() =>
                  document
                    .getElementById("cotacao")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="gap-2"
              >
                Solicitar Cotação
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="whatsapp"
                size="xl"
                onClick={handleWhatsApp}
                className="gap-2"
              >
                <WhatsAppIcon />
                WhatsApp
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
