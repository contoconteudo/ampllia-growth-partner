import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy py-12">
      <div className="container-page">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-xl font-bold text-text-on-navy">Ampllia</p>
            <p className="text-text-on-navy-muted text-sm mt-1">
              Gestão e Marketing para Clínicas, Consultórios e Hospitais
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-text-on-navy/10 flex items-center justify-center text-text-on-navy-muted hover:bg-primary hover:text-primary-foreground transition"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-text-on-navy/10 flex items-center justify-center text-text-on-navy-muted hover:bg-primary hover:text-primary-foreground transition"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-text-on-navy/10 mt-8 pt-6 text-center">
          <p className="text-text-on-navy-muted/60 text-xs">
            © 2025 Ampllia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
