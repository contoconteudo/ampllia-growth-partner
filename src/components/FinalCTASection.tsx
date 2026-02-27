import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WA_LINK = "https://wa.me/5500000000000";

const FinalCTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(var(--primary) / 0.3) 50%, hsl(var(--accent) / 0.2) 100%)',
    }}>
      <div ref={ref} className={`container-narrow text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-navy leading-tight mb-6">
          Vamos ampliar seus resultados de forma inteligente?
        </h2>
        <p className="text-text-on-navy-muted text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Se sua clínica tem potencial, mas falta estrutura para escalar com segurança, 
          é hora de dar o próximo passo.
        </p>

        <div className="w-16 h-px bg-primary/40 mx-auto mb-10" />

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-10 py-5 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 transition shadow-xl shadow-primary/30"
        >
          Quero uma análise estratégica da minha clínica
        </a>
      </div>
    </section>
  );
};

export default FinalCTASection;
