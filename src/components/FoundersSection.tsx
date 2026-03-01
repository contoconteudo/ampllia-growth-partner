import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { User } from "lucide-react";
import lucianaPhoto from "@/assets/luciana-ferraz.webp";

const founders = [
  {
    name: "Luciana Ferraz",
    title: "Estrategista de Posicionamento & Marketing em Saúde",
    bio: "Publicitária e estrategista com mais de 14 anos de experiência. Especialista em posicionamento estratégico e performance para empresas da saúde. Já apoiou mais de 100 empresas na organização estratégica e ampliação consistente de resultados. Acredita que visibilidade só faz sentido quando sustenta resultado.",
  },
  {
    name: "Luciano Conde",
    title: "Especialista em Gestão de Negócios em Saúde",
    bio: "Especialista em gestão de negócios em saúde. Atua há mais de uma década estruturando clínicas e empresas do setor a partir de processos, indicadores e boas práticas, com foco em maturidade empresarial, eficiência operacional e crescimento sustentável. Desenvolvedor de metodologia aplicada à realidade do setor.",
  },
];

const FoundersSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-gray section-padding">
      <div ref={ref} className={`container-page transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-14">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Quem está por trás da Ampllia
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mt-4">
            Uma união completa e estratégica no mercado da saúde.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((f, i) => (
            <div key={i} className="bg-background rounded-2xl p-8 shadow-sm border border-border">
              <div className="flex items-center gap-4 mb-5">
                {i === 0 ? (
                  <img src={lucianaPhoto} alt={f.name} className="w-16 h-16 rounded-full object-cover" />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <User className="text-accent" size={28} />
                  </div>
                )}
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg">{f.name}</h3>
                  <p className="text-accent text-sm font-medium">{f.title}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.bio}</p>
            </div>
          ))}
        </div>

        <p className="text-center font-heading font-bold text-xl md:text-2xl text-accent mt-14">
          Marketing + Gestão + Operação.<br />
          <span className="text-foreground">A tríade que sustenta crescimento real.</span>
        </p>
      </div>
    </section>
  );
};

export default FoundersSection;
