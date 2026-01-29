import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoFourvip from "@/assets/logo-fourvip.png";
const navLinks = [
  { href: "/", label: "Início", isRoute: true },
  { href: "#servicos", label: "Serviços", isRoute: false },
  { href: "#frota", label: "Frota", isRoute: false },
  { href: "#depoimentos", label: "Depoimentos", isRoute: false },
  { href: "/contato", label: "Contato", isRoute: true },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Se não estiver na página inicial, navega primeiro
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header-bar py-4">
      <div className="container-premium px-6 lg:px-12">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logoFourvip} 
              alt="Four Vip Transport" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-medium text-white/80 hover:text-primary transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-white/80 hover:text-primary transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="header"
              size="sm"
              onClick={() => window.open("tel:+5511945339917")}
              className="gap-2"
            >
              <Phone className="h-4 w-4" />
              <span>Ligar Agora</span>
            </Button>
            <Button
              variant="bronze"
              size="sm"
              onClick={() => handleNavClick("#cotacao")}
            >
              Solicitar Cotação
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border"
          >
            <div className="container-premium px-6 py-6 space-y-4">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-left py-3 text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border/50"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left py-3 text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border/50"
                  >
                    {link.label}
                  </button>
                )
              )}
              <div className="pt-4 space-y-3">
                <Button
                  variant="header"
                  size="lg"
                  className="w-full gap-2"
                  onClick={() => window.open("tel:+5511945339917")}
                >
                  <Phone className="h-5 w-5" />
                  <span>Ligar Agora</span>
                </Button>
                <Button
                  variant="bronze"
                  size="lg"
                  className="w-full"
                  onClick={() => handleNavClick("#cotacao")}
                >
                  Solicitar Cotação
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
