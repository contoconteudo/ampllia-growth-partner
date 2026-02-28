import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WA_LINK = "https://wa.me/5500000000000";

const TurningPointSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-gray section-padding">
      <div ref={ref} className={`container-narrow text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <span className="text-accent text-sm font-semibold uppercase tracking-widest">
          A Virada de Chave
        </span>

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mt-4 mb-8">
          Toda clínica tem potencial. Nem toda tem estrutura para sustentá-lo.
        </h2>

        <div className="space-y-5 text-muted-foreground text-lg leading-relaxed text-left">
          <p>
            A Ampllia nasce para resolver esse desalinhamento. Somos uma empresa de Gestão e Marketing 
            aplicada à saúde, com um método que cria um ciclo inteligente de crescimento.
          </p>
          <p>Nosso foco não é ação isolada. É construção de valor contínuo.</p>
          <p>
            Organizamos a base do negócio, estruturamos indicadores, identificamos gargalos reais e, 
            só então, potencializamos o marketing. Crescimento que faz sentido hoje e continua fazendo amanhã.
          </p>
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-10 px-8 py-4 rounded-lg border-2 border-primary text-primary font-bold text-base hover:bg-primary hover:text-primary-foreground transition"
        >
          Quero saber como a Ampllia pode me ajudar
        </a>
      </div>
    </section>
  );
};

export default TurningPointSection;
