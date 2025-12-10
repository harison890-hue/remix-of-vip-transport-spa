import { motion } from "framer-motion";
import { Wifi, Shield, MapPin, Armchair } from "lucide-react";
import { useState } from "react";

import fleetSedan from "@/assets/fleet-sedan.jpg";
import fleetVan from "@/assets/fleet-van.jpg";
import fleetBmw from "@/assets/fleet-bmw.jpg";

const vehicles = [
  {
    id: 1,
    name: "Mercedes-Benz Classe S",
    category: "Sedan Executivo",
    image: fleetSedan,
    passengers: "3 passageiros",
    features: ["Wi-Fi 4G", "Couro Premium", "Água Mineral", "Carregador USB"],
  },
  {
    id: 2,
    name: "Mercedes-Benz Sprinter",
    category: "Van Executiva",
    image: fleetVan,
    passengers: "12 passageiros",
    features: ["Wi-Fi 4G", "Ar Condicionado", "Bagageiro Amplo", "Seguro Total"],
  },
  {
    id: 3,
    name: "BMW Série 7 / Audi A8",
    category: "Sedan Luxo",
    image: fleetBmw,
    passengers: "3 passageiros",
    features: ["Wi-Fi 4G", "Interior Blindado", "Champanhe", "TV LED"],
  },
];

const fleetFeatures = [
  { icon: Wifi, label: "Wi-Fi 4G" },
  { icon: Armchair, label: "Couro Premium" },
  { icon: Shield, label: "Segurança Total" },
  { icon: MapPin, label: "GPS Monitorado" },
];

export function FleetSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="frota"
      className="section-padding bg-secondary text-secondary-foreground relative overflow-hidden"
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
            Excelência sobre rodas
          </span>
          <h2 className="heading-section text-secondary-foreground mt-4">
            Frota Premium
          </h2>
          <p className="text-secondary-foreground/70 mt-4 max-w-2xl mx-auto text-premium">
            Veículos selecionados rigorosamente para proporcionar o máximo em
            conforto, segurança e sofisticação.
          </p>
        </motion.div>

        {/* Fleet Features Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 mb-12 pb-12 border-b border-secondary-foreground/10"
        >
          {fleetFeatures.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-3 text-secondary-foreground/80"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium tracking-wide">
                {feature.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Vehicle Carousel */}
        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group cursor-pointer ${
                  activeIndex === index ? "lg:scale-105" : ""
                } transition-all duration-500`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="relative overflow-hidden rounded-lg bg-anthracite-light">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} - Transporte Executivo SP`}
                    className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs font-medium text-primary tracking-wider uppercase">
                      {vehicle.category}
                    </span>
                    <h3 className="text-xl font-display font-medium text-secondary-foreground mt-1">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm text-secondary-foreground/70 mt-1">
                      {vehicle.passengers}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {vehicle.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1.5 bg-secondary-foreground/5 border border-secondary-foreground/10 text-secondary-foreground/70 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {vehicles.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-primary"
                  : "bg-secondary-foreground/30"
              }`}
              aria-label={`Ver veículo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
