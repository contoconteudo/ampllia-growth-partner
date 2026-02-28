import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingDown, TrendingUp } from "lucide-react";

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-light section-padding">
      <div ref={ref} className={`container-page transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <span className="text-accent text-sm font-semibold uppercase tracking-widest">
          O Problema Real do Mercado
        </span>

        <div className="grid md:grid-cols-2 gap-12 mt-6">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              Clínica cheia ou clínica vazia, o problema pode ser o mesmo.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Algumas clínicas têm pacientes, mas vivem no caos. Outras têm estrutura, 
              mas não conseguem gerar demanda.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="text-destructive" size={20} />
                <h3 className="font-heading font-bold text-foreground">Do lado do caos</h3>
              </div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>Crescimento desorganizado</li>
                <li>Equipe sobrecarregada</li>
                <li>Lucro que não acompanha o esforço</li>
              </ul>
            </div>

            <div className="rounded-xl border border-accent/20 bg-accent/5 p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="text-accent" size={20} />
                <h3 className="font-heading font-bold text-foreground">Do lado do vazio</h3>
              </div>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>Agenda ociosa</li>
                <li>Dependência de indicação</li>
                <li>Marketing que não converte</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-center font-heading font-bold text-xl md:text-2xl text-foreground mt-12">
          Em comum? <span className="text-gradient">Falta de estratégia e estrutura.</span>
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
