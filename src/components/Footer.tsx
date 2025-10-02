import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-foreground to-accent text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="ICONTABIL Logo" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Escritório de contabilidade em Porto União-SC, oferecendo serviços personalizados desde 2017.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+554235232405" 
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone size={16} />
                  <span>(42) 3523-2405</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:icontabil01@gmail.com" 
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail size={16} />
                  <span>icontabil01@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span>Rua Quintino Bocaiuva, 27<br />Porto União - SC</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Redes sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/icontabil_/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Instagram da ICONTABIL"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/icontabil.contabilidade"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label="Facebook da ICONTABIL"
              >
                <Facebook size={20} />
              </a>
            </div>
            <p className="text-sm text-primary-foreground/80 mt-4">
              Segunda a Sexta<br />
              8:00 às 17:30
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} ICONTABIL LTDA. Todos os direitos reservados.
          </p>
          <p className="text-xs text-primary-foreground/60 mt-2">
            CNPJ: 57.343.995/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
