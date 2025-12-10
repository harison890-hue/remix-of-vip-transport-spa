import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Eduardo M.",
    role: "CEO, Empresa de Tecnologia",
    content:
      "A Four Vip Transport transformou minha rotina de viagens a trabalho. A pontualidade e discrição são impecáveis. Recomendo para qualquer executivo que valoriza seu tempo.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mariana L.",
    role: "Diretora Financeira",
    content:
      "Utilizo os serviços há mais de 2 anos para transfers de aeroporto. Nunca tive um atraso sequer. Os motoristas são extremamente profissionais e os veículos impecáveis.",
    rating: 5,
  },
  {
    id: 3,
    name: "Roberto S.",
    role: "Empresário",
    content:
      "Contratei para um evento corporativo e superou todas as expectativas. A coordenação foi perfeita e nossos convidados ficaram impressionados com o nível do serviço.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="depoimentos"
      className="section-padding bg-cream relative overflow-hidden"
    >
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
            Depoimentos
          </span>
          <h2 className="heading-section text-foreground mt-4">
            O que Nossos Clientes Dizem
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative bg-card border border-border rounded-lg p-8 md:p-12 shadow-elegant"
          >
            {/* Quote Icon */}
            <div className="absolute -top-5 left-8 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Quote className="h-5 w-5 text-primary-foreground" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-primary text-primary"
                />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed font-display italic">
              "{testimonials[activeIndex].content}"
            </blockquote>

            {/* Author */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="font-display font-medium text-foreground">
                {testimonials[activeIndex].name}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {testimonials[activeIndex].role}
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-10 bg-primary"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
