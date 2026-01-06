import { useState, useEffect } from "react";
import { Phone, Menu, X, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { t, lang, switchLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#chi-siamo", label: t.nav.about },
    { href: "#servizi", label: t.nav.services },
    { href: "#galleria", label: t.nav.gallery },
    { href: "#orari", label: t.nav.hours },
    { href: "#contatto", label: t.nav.contact },
  ];

  const languageOptions = [
    { code: "it" as const, label: "IT" },
    { code: "de" as const, label: "DE" },
    { code: "en" as const, label: "EN" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/images/logo.jpg"
            alt="Perfectposa"
            className="h-12 w-12 rounded-lg object-cover"
          />
          <div className="flex flex-col">
            <span
              className={`font-serif text-xl transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              Perfectposa
            </span>
            <span
              className={`text-xs tracking-widest transition-colors ${
                isScrolled ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              {t.nav.profession}
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={`flex items-center gap-1.5 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                <Globe className="h-4 w-4" />
                {lang.toUpperCase()}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languageOptions.map((option) => (
                <DropdownMenuItem
                  key={option.code}
                  onClick={() => switchLanguage(option.code)}
                  className={lang === option.code ? "bg-accent/10" : ""}
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild>
            <a href="tel:+41788358409">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2">
              {languageOptions.map((option) => (
                <Button
                  key={option.code}
                  variant={lang === option.code ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    switchLanguage(option.code);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {option.label}
                </Button>
              ))}
            </div>
            <Button asChild className="w-full">
              <a href="tel:+41788358409">
                <Phone className="h-4 w-4 mr-2" />
                {t.nav.call}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
