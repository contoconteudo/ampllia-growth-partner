import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Settings, Brain, Rocket, RefreshCcw, Atom } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BrainAtomCycle = () => {
  const [phase, setPhase] = useState<"brain" | "atom">("brain");

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((p) => (p === "brain" ? "atom" : "brain"));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[22px] h-[22px]">
      <AnimatePresence mode="wait">
        {phase === "brain" ? (
          <motion.div
            key="brain"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Brain className="text-accent" size={22} />
          </motion.div>
        ) : (
          <motion.div
            key="atom"
            initial={{ scale: 1.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Atom className="text-accent" size={22} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const steps = [
  {
    icon: Settings,
    title: "Organização Interna",
    desc: "Mapeamos processos, fluxos, gargalos e oportunidades reais de ganho.",
  },
  {
    icon: Brain,
    title: "Inteligência Estratégica",
    desc: "Identificamos onde o negócio pode crescer com mais eficiência e menos desperdício.",
  },
  {
    icon: Rocket,
    title: "Posicionamento e Performance",
    desc: "Com base nos ganhos gerados, investimos em marketing de forma inteligente, mensurável e sustentável.",
  },
  {
    icon: RefreshCcw,
    title: "Crescimento Contínuo",
    desc: "Receita e marca crescem juntas, criando um ciclo virtuoso de valor.",
  },
];

const MethodSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-dark section-padding">
      <div ref={ref} className={`container-page transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            O Método Ampllia
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-on-navy leading-tight mt-4">
            O Ciclo de Crescimento Inteligente
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-navy-light/60 border border-text-on-navy/10 rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/15 text-accent font-heading font-bold text-lg">
                    {i + 1}
                  </span>
                  {i === 1 ? (
                    <BrainAtomCycle />
                  ) : i === 2 ? (
                    <motion.div
                      animate={{
                        x: [0, -1, 1, -1, 0.5, -0.5, 0],
                        y: [0, 1, -1, 0.5, -1, 0.5, 0],
                        rotate: -45,
                      }}
                      transition={{
                        x: { duration: 0.4, repeat: Infinity, ease: "linear" },
                        y: { duration: 0.4, repeat: Infinity, ease: "linear" },
                        rotate: { duration: 0 },
                      }}
                    >
                      <Rocket className="text-accent" size={22} />
                    </motion.div>
                  ) : i === 3 ? (
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <RefreshCcw className="text-accent" size={22} />
                    </motion.div>
                  ) : (
                    <step.icon className={`text-accent ${i === 0 ? 'animate-spin' : ''}`} style={i === 0 ? { animationDuration: '3s' } : {}} size={22} />
                  )}
                </div>
                <h3 className="font-heading font-bold text-text-on-navy text-lg mb-2">{step.title}</h3>
                <p className="text-text-on-navy-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-accent/40 text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16 max-w-xl mx-auto">
          <p className="font-heading text-xl md:text-2xl font-bold text-text-on-navy leading-relaxed">
            "Não é sobre crescer rápido.<br />
            É sobre crescer bem.<br />
            <span className="text-gradient">Esse é o ciclo que a Ampllia constrói.</span>"
          </p>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
