import { motion } from "framer-motion";
import { Plane, Clock, Calendar, MapPin, Star, Shield, BellRing } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Transfer Aeroportuário",
    description:
      "Transfers executivos para GRU, CGH e VCP com monitoramento de voos e máxima pontualidade.",
    keywords: ["GRU", "CGH", "VCP"],
  },
  {
    icon: Clock,
    title: "Disposição por Hora",
    description:
      "Motorista particular à sua disposição para reuniões, compromissos e deslocamentos contínuos.",
    keywords: ["Motorista Particular", "Executivo"],
  },
  {
    icon: Calendar,
    title: "Eventos Corporativos",
    description:
      "Transporte VIP para convenções, congressos e eventos empresariais com coordenação logística.",
    keywords: ["Eventos", "Convenções"],
  },
  {
    icon: MapPin,
    title: "Viagens Personalizadas",
    description:
      "Rotas exclusivas para viagens intermunicipais e interestaduais com total conforto.",
    keywords: ["Viagens SP", "Interestadual"],
  },
  {
    icon: BellRing,
    title: "Concierge",
    description:
      "Serviço personalizado de concierge para atender suas necessidades especiais com exclusividade e discrição.",
    keywords: ["Concierge", "Exclusivo"],
  },
];

const vipFeatures = [
  { icon: Star, text: "VIP Experience Premium" },
  { icon: Shield, text: "Segurança Certificada" },
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

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

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
            O que oferecemos
          </span>
          <h2 className="heading-section text-foreground mt-4">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-premium">
            Soluções completas em transporte executivo para atender às suas
            necessidades com excelência e sofisticação.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary/30 hover:shadow-elegant transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-display font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* VIP Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          {vipFeatures.map((feature) => (
            <div
              key={feature.text}
              className="flex items-center gap-3 text-foreground"
            >
              <feature.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium tracking-wide">
                {feature.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
