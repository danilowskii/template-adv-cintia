import { CheckCircle } from "lucide-react";

export default function About({ data }) {
  const firmName = "Magalhães & Associados";
  return (
    <section
      id="sobre"
      style={{
        "--bg": data.colors.bg,
        "--primary": data.colors.primary,
        "--secondary": data.colors.secondary,
        "--text": data.colors.text,
      }}
      className="py-24 bg-[var(--bg)] backdrop-blur-sm border-y border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-[var(--primary)] blur-[80px] opacity-20"></div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Reunião"
              className="relative z-10 rounded-sm shadow-2xl object-cover h-[500px] w-full contrast-125 transition-all duration-1000 border border-white/10"
            />
            <div className="absolute -bottom-8 -right-8 bg-[var(--bg)] backdrop-blur-xl p-8 rounded-sm shadow-2xl z-20 max-w-xs border-l-4 border-[var(--primary)] hidden lg:block">
              <p className="text-white font-serif italic text-lg leading-relaxed">
                "A justiça não consiste em ser neutro, mas em descobrir o certo
                e sustentá-lo."
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest mb-3">
              Sobre o Escritório
            </h2>
            <h3 className="text-4xl font-bold text-white font-serif mb-8">
              Tradição, Ética e <br />
              Resultados Comprovados
            </h3>
            <p className="text-[var(--text)] mb-8 text-lg leading-relaxed">
              Fundado há mais de 15 anos, o escritório {firmName} transcende a
              advocacia tradicional. Somos parceiros de negócios e guardiões de
              legados.
            </p>

            <div className="space-y-5">
              {[
                "Atendimento personalizado e humanizado",
                "Equipe disponível 24/7 para emergências",
                "Transparência total nos honorários",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-3 bg-white/5 rounded-sm border border-white/5 hover:border-[var(--primary)]/30 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-[var(--primary)] flex-shrink-0" />
                  <span className="text-[var(--text)] font-medium text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Advogado Sênior"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[var(--secondary)]"
                />
                <div>
                  <p className="text-white font-bold text-lg">
                    Dr. Carlos Magalhães
                  </p>
                  <p className="text-[var(--primary)] text-sm tracking-wide">
                    Sócio Fundador
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
