import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalStatementSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-dark section-padding">
      <div ref={ref} className={`container-narrow text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="space-y-2">
          <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-on-navy">
            Ampliar <span className="text-gradient">visão</span>.
          </p>
          <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-on-navy">
            Ampliar <span className="text-gradient">resultados</span>.
          </p>
          <p className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-on-navy">
            Ampliar <span className="text-gradient">valor</span>.
          </p>
        </div>

        <div className="mt-12">
          <p className="font-heading text-xl md:text-2xl font-bold text-text-on-navy-muted">
            Crescer não é inflar.<br />
            <span className="text-text-on-navy">É estruturar.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalStatementSection;
