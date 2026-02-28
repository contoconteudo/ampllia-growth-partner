const WA_LINK = "https://wa.me/5500000000000";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-dark overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light opacity-90" />

      <div className="relative container-page w-full pt-24 pb-16 md:pt-0">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-sm font-medium mb-8">
            Gestão & Marketing para Saúde
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-on-navy leading-[1.1] mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Crescer não é sobre aparecer mais.{" "}
            <span className="text-gradient">É sobre estruturar melhor.</span>
          </h1>

          <h2 className="text-lg md:text-xl text-text-on-navy-muted font-medium mb-6 max-w-2xl mx-auto leading-relaxed">
            Clínicas, consultórios e hospitais não crescem com marketing isolado.
            Crescem quando gestão, operação e posicionamento trabalham juntos.
          </h2>

          <p className="text-text-on-navy-muted/70 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            A Ampllia é a união entre consultoria estratégica e marketing orientado a resultado, 
            aplicada de forma específica ao mercado da saúde. Nós não começamos pelo anúncio. 
            Começamos pelo negócio.
          </p>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-base hover:brightness-110 transition shadow-lg shadow-primary/25"
          >
            Quero ampliar meus resultados com inteligência
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
