import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WA_LINK = "https://wa.me/5500000000000";

const negatives = [
  "Não vendemos postagens.",
  "Não vendemos tráfego isolado.",
  "Não vendemos promessas.",
];

const DifferentiatorSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-light section-padding">
      <div ref={ref} className={`container-page transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 md:border-l-4 md:border-accent md:pl-8">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Por que a Ampllia é diferente?
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mt-4 mb-6">
              Por que a Ampllia é diferente de uma agência comum?
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Porque não somos "só" uma agência de marketing.
            </p>
            <ul className="space-y-2 mb-6">
              {negatives.map((item, i) => (
                <li key={i} className="text-muted-foreground/60 line-through text-base">{item}</li>
              ))}
            </ul>
            <p className="text-foreground text-lg font-medium mb-4">
              Estruturamos o negócio por dentro para que o marketing faça sentido por fora.
            </p>
            <p className="font-heading text-xl md:text-2xl font-bold text-accent mb-8">
              A Ampllia é um parceiro estratégico.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-base hover:brightness-110 transition shadow-lg shadow-primary/25"
            >
              Quero a Ampllia como parceiros
            </a>
          </div>

          <div className="md:col-span-2 flex items-center justify-center">
            <div className="space-y-4 w-full max-w-xs">
              <div className="rounded-xl bg-destructive/5 border border-destructive/20 p-4 text-center">
                <span className="text-destructive font-bold text-lg">✗</span>
                <p className="text-sm text-muted-foreground mt-1">Agência genérica</p>
                <p className="text-xs text-muted-foreground/60 mt-0.5">Posts + tráfego sem contexto</p>
              </div>
              <div className="rounded-xl bg-accent/5 border border-accent/20 p-4 text-center">
                <span className="text-accent font-bold text-lg">✓</span>
                <p className="text-sm text-foreground font-semibold mt-1">Ampllia</p>
                <p className="text-xs text-muted-foreground mt-0.5">Gestão + Marketing + Estratégia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;
