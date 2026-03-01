import amplliaLogoWhite from "@/assets/ampllia-logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-navy py-12">
      <div className="container-page">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left flex flex-col items-center md:items-start gap-3">
            <img src={amplliaLogoWhite} alt="Ampllia" className="h-10" />
            <p className="text-text-on-navy-muted text-sm">
              Gestão e Marketing para Clínicas, Consultórios e Hospitais
            </p>
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
