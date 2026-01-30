import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, Headset } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoFourvip from "@/assets/logo-fourvip.png";

const FlagBrazil = () => (
  <svg viewBox="0 0 640 480" className="w-5 h-3.5 rounded-[2px] shadow-sm cursor-pointer hover:opacity-80 transition-opacity">
    <rect fill="#229E45" width="640" height="480"/>
    <polygon fill="#F8E509" points="320,40 600,240 320,440 40,240"/>
    <circle fill="#2B49A3" cx="320" cy="240" r="80"/>
    <path d="M260,240 Q320,200 380,240" stroke="#FFFFFF" strokeWidth="12" fill="none"/>
  </svg>
);

const FlagUSA = () => (
  <svg viewBox="0 0 640 480" className="w-5 h-3.5 rounded-[2px] shadow-sm cursor-pointer hover:opacity-80 transition-opacity">
    <rect fill="#BD3D44" width="640" height="480"/>
    <rect fill="#FFFFFF" y="37" width="640" height="37"/>
    <rect fill="#FFFFFF" y="111" width="640" height="37"/>
    <rect fill="#FFFFFF" y="185" width="640" height="37"/>
    <rect fill="#FFFFFF" y="259" width="640" height="37"/>
    <rect fill="#FFFFFF" y="333" width="640" height="37"/>
    <rect fill="#FFFFFF" y="407" width="640" height="37"/>
    <rect fill="#192F5D" width="256" height="259"/>
  </svg>
);

const FlagSpain = () => (
  <svg viewBox="0 0 640 480" className="w-5 h-3.5 rounded-[2px] shadow-sm cursor-pointer hover:opacity-80 transition-opacity">
    <rect fill="#C60B1E" width="640" height="480"/>
    <rect fill="#FFC400" y="120" width="640" height="240"/>
  </svg>
);
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
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wide"
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* Flags + CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Flags */}
            <div className="flex items-center gap-1 mr-3">
              <FlagBrazil />
              <FlagUSA />
              <FlagSpain />
            </div>
            
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
              className="gap-2"
            >
              <Headset className="h-4 w-4" />
              Falar com Atendente
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
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
                  className="w-full gap-2"
                  onClick={() => handleNavClick("#cotacao")}
                >
                  <Headset className="h-5 w-5" />
                  Falar com Atendente
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
