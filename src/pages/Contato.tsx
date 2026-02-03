import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    value: "(11) 99670-2111",
    link: "tel:+5511996702111",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@fourviptransport.com.br",
    link: "mailto:contato@fourviptransport.com.br",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "São Paulo, SP",
    link: null,
  },
  {
    icon: Clock,
    title: "Atendimento",
    value: "24 horas, 7 dias por semana",
    link: null,
  },
];

export default function Contato() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-premium px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Entre em Contato
            </h1>
            <p className="text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
              Estamos prontos para atender você. Entre em contato conosco para solicitar uma cotação ou tirar suas dúvidas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container-premium px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
                Informações de Contato
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="p-3 rounded-full bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  Atendimento Rápido via WhatsApp
                </h3>
                <p className="text-muted-foreground mb-4">
                  Para um atendimento mais ágil, entre em contato diretamente pelo WhatsApp.
                </p>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() =>
                    window.open(
                      "https://wa.me/5511996702111?text=Olá! Gostaria de mais informações sobre os serviços de transporte executivo.",
                      "_blank"
                    )
                  }
                  className="gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Falar no WhatsApp
                </Button>
              </div>

              {/* Google Maps */}
              <div className="mt-10">
                <h3 className="text-xl font-display font-semibold text-foreground mb-4 text-center">
                  Nossa Localização
                </h3>
                <div className="rounded-xl overflow-hidden border border-border/50 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.5671234567!2d-46.6762777!3d-23.6248412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4f08849a93b9%3A0xe12207446fd8a6d!2sTransfer%20Vip%20Executive%20-%20chauffer%20service!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Transfer Vip Executive"
                    className="w-full"
                  />
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="https://www.google.com/maps/place/Transfer+Vip+Executive+-+chauffer+service/@-23.6248412,-46.6762777,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce4f08849a93b9:0xe12207446fd8a6d!8m2!3d-23.6248412!4d-46.6762777!16s%2Fg%2F11h7sp_btr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
