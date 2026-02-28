import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";

const WA_LINK = "https://wa.me/5500000000000";

const items = [
  "Já entenderam que marketing não é só postar no Instagram",
  "Reconhecem que a operação não acompanha os objetivos de crescimento",
  "Cresceram de forma desorganizada e precisam estruturar a base",
  "Querem crescer com inteligência e controle",
  "Buscam lucro, posicionamento e sustentabilidade",
  "Valorizam decisões estratégicas e dados reais",
  "Querem um parceiro de negócio, não só um fornecedor",
];

const WhoIsItForSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-light section-padding">
      <div ref={ref} className={`container-page transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Para quem é a Ampllia?
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mt-4">
            Para quem é a Ampllia?
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            A Ampllia é para clínicas, consultórios e hospitais que:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={22} />
              <p className="text-foreground text-base">{item}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-base hover:brightness-110 transition shadow-lg shadow-primary/25"
          >
            Quero entender se o método Ampllia funciona para o meu negócio
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItForSection;
