import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logoFourvip from "@/assets/logo-fourvip.png";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#frota", label: "Frota" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-premium section-padding py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link to="/">
                <img 
                  src={logoFourvip} 
                  alt="Four Vip Transport" 
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed mb-6">
              Excelência em transporte executivo. Seu tempo é precioso, nossa
              missão é cuidar dele com sofisticação.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/fourviip/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <a
                    href="tel:+5511945339917"
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    (11) 94533-9917
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <a
                  href="mailto:contato@fourviptransport.com.br"
                  className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  contato@fourviptransport.com.br
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-sm text-secondary-foreground/70">
                  São Paulo, SP - Brasil
                </span>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/termos-de-uso"
                  className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  to="/politica-de-privacidade"
                  className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Políticas de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col items-center gap-4">
          <p className="text-xs text-secondary-foreground/60 font-medium">
            Four Vip Transport e Serviços - CNPJ: 40.820.333/0001-81
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            <p className="text-xs text-secondary-foreground/50">
              © {currentYear} Four Vip Transport. Todos os direitos reservados.
            </p>
            <p className="text-xs text-secondary-foreground/50">
              Transporte Executivo SP | Transfer Aeroporto GRU CGH VCP | Aluguel de Carro com Motorista
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
