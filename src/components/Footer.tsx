import { Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#chi-siamo", label: t.footer.about },
    { href: "#servizi", label: t.nav.services },
    { href: "#galleria", label: t.nav.gallery },
    { href: "#orari", label: t.nav.hours },
    { href: "#contatto", label: t.nav.contact },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.jpg"
                alt="Perfectposa"
                className="h-12 w-12 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl">Perfectposa Sagl</span>
                <span className="text-xs text-primary-foreground/70">
                  {t.footer.tagline}
                </span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4 max-w-md">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/perfectposa.giubiasco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/perfectposa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg">{t.footer.navigation}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg">{t.contact.label}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="tel:+41788358409" className="hover:text-primary-foreground transition-colors">
                  +41 78 835 84 09
                </a>
              </li>
              <li>
                <a href="mailto:perfectposa@gmail.com" className="hover:text-primary-foreground transition-colors">
                  perfectposa@gmail.com
                </a>
              </li>
              <li className="text-primary-foreground/60">
                Viale C. Olgiati 14
                <br />
                6512 Giubiasco
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            © {currentYear} Perfectposa Sagl. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
