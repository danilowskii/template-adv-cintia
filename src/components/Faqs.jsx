import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function Faqs({ data }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'Como funciona o "Ano Marítimo"?',
      answer:
        "É uma regra especial que permite a contagem diferenciada do tempo de serviço para o trabalhador embarcado, onde cada período de 255 dias de trabalho efetivo pode ser convertido em 1 ano de contribuição, acelerando o preenchimento dos requisitos para a aposentadoria.",
    },
    {
      question: "Quais riscos de bordo dão direito à aposentadoria especial?",
      answer:
        "Exposição a agentes nocivos como ruído, produtos químicos, calor, frio, vibração, eletricidade, dentre outros. ",
    },
    {
      question: "O tempo em navios estrangeiros conta para a aposentadoria?",
      answer:
        "Sim, via acordos internacionais ou averbação específica, desde que comprovado documentalmente para o INSS.",
    },
    {
      question: "É possível antecipar a aposentadoria do marítimo?",
      answer:
        "Sim. Existem alguns períodos “escondidos” que podem antecipar seu tempo de contribuição. Por exemplo: Tempo de serviço militar, tempo de escola de formação militar, trabalho em atividade com exposição a agente nocivo, período como aluno-aprendiz, trabalho na pesca artesanal ou industrial, dentre outros. ",
    },
    {
      question:
        "O período trabalhado como pescador conta como tempo de contribuição para o INSS?",
      answer:
        "Sim, a atividade desenvolvida como pescador pode ser computada como tempo de contribuição para fins de aposentadoria e demais benefícios do INSS, respeitado o preenchimento dos requisitos específicos desta categoria. ",
    },
  ];
  return (
    <section
      style={{
        "--bg": data.colors.bg,
        "--primary": data.colors.primary,
        "--secondary": data.colors.secondary,
        "--third": data.colors.third,
        "--text": data.colors.text,
      }}
      className="py-16 relative z-10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-[var(--primary)] uppercase tracking-[0.3em] mb-4">
            Tire suas dúvidas
          </h2>
          <h3 className="text-3xl md:text-5xl text-[var(--third)] font-serif">
            Perguntas Frequentes
          </h3>
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`
                  group rounded-lg border transition-all duration-300 overflow-hidden
                  ${
                    openFaq === index
                      ? "bg-slate-900/80 border-[var(--secondary)] shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                      : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                  }
                  backdrop-blur-md
                `}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span
                  className={`font-serif text-md transition-colors duration-300 ${
                    openFaq === index
                      ? "text-[var(--primary)]"
                      : "text-[var(--third)]"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`
                    p-2 rounded-full transition-all duration-300
                    ${
                      openFaq === index
                        ? "bg-[var(--primary)] text-[var(--bg)] rotate-180"
                        : "bg-white/5 text-[var(--text)] group-hover:text-[var(--third)]"
                    }
                  `}
                >
                  {openFaq === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>

              <div
                className={`
                    px-6 text-[var(--text)] leading-relaxed transition-all duration-500 ease-in-out
                    ${
                      openFaq === index
                        ? "max-h-96 pb-8 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
              >
                <p className="border-l-2 border-[var(--secondary)] pl-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
