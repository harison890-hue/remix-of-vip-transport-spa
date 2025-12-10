import { motion } from "framer-motion";
import { ShieldCheck, Clock, Eye, Headphones } from "lucide-react";

const differentials = [
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Motoristas certificados, veículos rastreados 24h e seguros completos para sua total tranquilidade.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description:
      "Compromisso absoluto com horários. Monitoramento de voos e antecipação de rotas em tempo real.",
  },
  {
    icon: Eye,
    title: "Discrição Total",
    description:
      "Privacidade garantida para executivos e celebridades. Confidencialidade é nossa prioridade.",
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description:
      "Atendimento dedicado a qualquer hora. Estamos sempre prontos para atender suas necessidades.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Por que nos escolher
          </span>
          <h2 className="heading-section text-foreground mt-4">
            Nossos Diferenciais
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-premium">
            Cada detalhe é pensado para garantir uma experiência excepcional em
            todos os seus deslocamentos.
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary/40 group-hover:shadow-bronze transition-all duration-500">
                <item.icon className="h-9 w-9 text-primary" />
              </div>
              <h3 className="text-lg font-display font-medium text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-border"
        >
          {[
            { value: "5.000+", label: "Viagens Realizadas" },
            { value: "98%", label: "Satisfação" },
            { value: "15+", label: "Anos de Experiência" },
            { value: "24/7", label: "Suporte Disponível" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-semibold text-primary">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
