import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

export function HeroSection() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/5511999999999?text=Olá! Gostaria de solicitar uma cotação para transporte executivo.",
      "_blank"
    );
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-background overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Veículo executivo de luxo Four Vip Transport"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
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

              <h1 className="heading-display text-foreground text-balance">
                Seu Tempo.{" "}
                <span className="text-primary">Nossa Excelência.</span>
              </h1>

              <p className="text-xl md:text-2xl font-display text-foreground/80">
                Transporte Executivo com Padrão VIP
              </p>
            </div>

            <p className="text-premium text-muted-foreground max-w-lg">
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
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            id="cotacao"
            className="bg-card/95 backdrop-blur-sm border border-border rounded-lg p-6 md:p-8 shadow-elegant"
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-display font-medium text-foreground">
                  Solicite sua Cotação
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Responderemos em até 15 minutos
                </p>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Nome Completo
                  </label>
                  <Input
                    type="text"
                    placeholder="Seu nome"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    WhatsApp
                  </label>
                  <Input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Tipo de Serviço
                  </label>
                  <select className="w-full h-10 px-3 rounded-sm border border-border bg-background text-foreground text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                    <option value="">Selecione o serviço</option>
                    <option value="aeroporto">Transfer Aeroporto</option>
                    <option value="disposicao">Disposição por Hora</option>
                    <option value="eventos">Eventos Corporativos</option>
                    <option value="viagem">Viagem Personalizada</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Observações (opcional)
                  </label>
                  <textarea
                    placeholder="Conte-nos mais sobre sua necessidade..."
                    rows={3}
                    className="w-full px-3 py-2 rounded-sm border border-border bg-background text-foreground text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                <Button variant="bronze" size="lg" className="w-full">
                  Enviar Solicitação
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você concorda com nossa{" "}
                <a href="#privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
