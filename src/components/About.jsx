import { CheckCircle } from "lucide-react";
import cintia1 from "../assets/cintia-1.webp";
import cintia2 from "../assets/cintia-2.webp";

export default function About({ data }) {
  const firmName = "Cìntia Albuquerque";
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
              src={cintia2}
              alt="Reunião"
              className="relative z-10 rounded-md shadow-2xl object-cover object-top h-[500px]  w-full contrast-125 transition-all border border-white/10"
            />
            <div className="absolute -bottom-8 -right-8 bg-[var(--bg)] backdrop-blur-xl p-8 rounded-sm shadow-2xl z-20 max-w-xs border-l-4 border-[var(--primary)] hidden lg:block">
              <p className="text-white font-serif italic text-lg leading-relaxed">
                "Defendemos os direitos de quem dedica sua vida ao trabalho no
                mar."
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold text-[var(--primary)] uppercase tracking-widest mb-3">
              Sobre a Especialista
            </h2>
            <h3 className="text-4xl font-bold text-white font-serif mb-8">
              Formação de Elite <br /> e Vivência Marítima Real
            </h3>
            <p className="text-[var(--text)] mb-8 text-lg leading-relaxed">
              Com nove anos de atuação no setor de construção naval e
              experiência embarcada como Oficial da Marinha Mercante, a Dra.
              Cìntia possui uma compreensão técnica profunda sobre a rotina,
              riscos e particularidades da carreira offshore. Sua atuação é
              pautada por um robusto currículo acadêmico, incluindo
              pós-graduações em Direito Marítimo, Portuário e Previdenciário,
              além de um MBA em Gestão Jurídica e Aduaneira, garantindo uma
              defesa estratégica e humanizada.
            </p>

            <div className="space-y-5">
              {[
                "Diploma em Ship Superintendent - Lloyd´s Maritime Academy - Londres",
                "Pós-Graduação em Direito Marítimo e Portuário",
                "Pós-Graduação em Direito Previdenciário",
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
                  src={cintia1}
                  alt="Advogada Sênior"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[var(--secondary)]"
                />
                <div>
                  <p className="text-white font-bold text-lg">
                    Dra. Cíntia Albuquerque
                  </p>
                  <p className="text-[var(--primary)] text-sm tracking-wide">
                    Sócia Fundadora
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
