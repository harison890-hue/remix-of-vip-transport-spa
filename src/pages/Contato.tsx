import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir mensagem para WhatsApp
    const message = `Olá! Meu nome é ${formData.nome}.%0A%0A*Assunto:* ${formData.assunto}%0A%0A*Mensagem:* ${formData.mensagem}%0A%0A*E-mail:* ${formData.email}%0A*Telefone:* ${formData.telefone}`;
    
    window.open(
      `https://wa.me/5511996702111?text=${message}`,
      "_blank"
    );

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para o WhatsApp para continuar o contato.",
    });
  };

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
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
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
              <div className="mt-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
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
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
                Envie sua Mensagem
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nome Completo *
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="bg-muted/30 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="bg-muted/30 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Telefone *
                    </label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      className="bg-muted/30 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="assunto"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Assunto *
                    </label>
                    <Input
                      id="assunto"
                      name="assunto"
                      type="text"
                      required
                      value={formData.assunto}
                      onChange={handleChange}
                      placeholder="Assunto da mensagem"
                      className="bg-muted/30 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mensagem *
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Digite sua mensagem aqui..."
                    rows={5}
                    className="bg-muted/30 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="bronze"
                  size="lg"
                  className="w-full gap-2"
                >
                  <Send className="h-5 w-5" />
                  Enviar Mensagem
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você será redirecionado para o WhatsApp para confirmar o envio da mensagem.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
