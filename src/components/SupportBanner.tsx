import { motion } from "framer-motion";
import supportTeamImg from "@/assets/support-team.jpg";

export function SupportBanner() {
  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-secondary"
        >
          <div className="grid lg:grid-cols-2 items-center">
            {/* Content */}
            <div className="p-8 md:p-12 lg:p-16 order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-primary leading-tight">
                Atendimento 24h
                <br />
                <span className="text-secondary-foreground">
                  Sempre Disponível para Você!
                </span>
              </h2>

              {/* Bronze Divider */}
              <div className="w-16 h-0.5 bg-primary my-6" />

              <p className="text-secondary-foreground/80 text-premium leading-relaxed">
                Precisa de um transporte executivo com urgência ou deseja
                agendar com antecedência? Nossa equipe está pronta para
                atendê-lo{" "}
                <strong className="text-primary font-medium">
                  a qualquer hora do dia ou da noite
                </strong>{" "}
                com eficiência e discrição.
              </p>
            </div>

            {/* Image */}
            <div className="relative h-64 lg:h-full min-h-[300px] order-1 lg:order-2">
              <img
                src={supportTeamImg}
                alt="Equipe de atendimento Four Vip - Suporte 24 horas"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient overlay for text readability on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent lg:bg-gradient-to-r lg:from-secondary lg:via-transparent lg:to-transparent opacity-60" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
