import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalStatementSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const bars = [
    { height: "40%", delay: "0.3s" },
    { height: "55%", delay: "0.5s" },
    { height: "70%", delay: "0.7s" },
    { height: "85%", delay: "0.9s" },
    { height: "100%", delay: "1.1s" },
  ];

  return (
    <section className="section-dark section-padding relative overflow-hidden">
      {/* Background growing bars */}
      <div className="absolute inset-0 flex items-end justify-center gap-3 md:gap-6 opacity-[0.07] pointer-events-none px-10">
        {bars.map((bar, i) => (
          <div
            key={i}
            className="w-12 md:w-20 rounded-t-md bg-gradient-to-t from-accent to-secondary"
            style={{
              height: isVisible ? bar.height : "0%",
              transition: `height 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${bar.delay}`,
            }}
          />
        ))}
      </div>

      <div
        ref={ref}
        className="container-narrow text-center relative z-10"
      >
        <div className="space-y-3">
          {["visão", "resultados", "valor"].map((word, i) => (
            <p
              key={word}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-on-navy"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
                transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.25}s`,
              }}
            >
              Ampliar{" "}
              <span
                className="text-gradient inline-block"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                  transition: `all 0.5s ease-out ${0.7 + i * 0.25}s`,
                }}
              >
                {word}
              </span>
              <span
                className="inline-block text-gradient"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.3s ease ${0.9 + i * 0.25}s`,
                }}
              >
                .
              </span>
            </p>
          ))}
        </div>

        {/* Decorative growing line */}
        <div className="flex justify-center my-10">
          <div
            className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"
            style={{
              width: isVisible ? "200px" : "0px",
              transition: "width 1s ease-out 1.4s",
            }}
          />
        </div>

        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease-out 1.6s",
          }}
        >
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
