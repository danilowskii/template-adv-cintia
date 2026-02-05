import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function Faqs({ data }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Como funciona a primeira consulta?",
      answer:
        "A primeira consulta é uma reunião diagnóstica. Analisamos detalhadamente o seu caso, os documentos disponíveis e apresentamos os possíveis caminhos jurídicos, riscos e expectativas de resultado. Pode ser realizada presencialmente ou por videoconferência.",
    },
    {
      question: "Qual o valor dos honorários advocatícios?",
      answer:
        "Trabalhamos com total transparência. Os honorários variam conforme a complexidade da causa e seguem a tabela da OAB como referência mínima. Oferecemos opções de pagamento parcelado e, em alguns casos trabalhistas ou cíveis, honorários de êxito (pagos apenas ao final).",
    },
    {
      question: "Quanto tempo demora o meu processo?",
      answer:
        "O tempo de duração depende de diversos fatores, como a complexidade da causa, o volume de processos no tribunal e a necessidade de produção de provas. Nossa equipe atua com proatividade para garantir a máxima celeridade possível, cobrando agilidade dos órgãos judiciais.",
    },
    {
      question: "Quais documentos devo ter na reunião?",
      answer:
        "Recomendamos trazer documento de identidade, comprovante de residência e todos os documentos relacionados ao fato (contratos, trocas de e-mail, fotos, boletim de ocorrência, notificações judiciais). Quanto mais informações, mais precisa será nossa análise.",
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
      className="py-24 relative z-10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-[var(--primary)] uppercase tracking-[0.3em] mb-4">
            Tire suas dúvidas
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[var(--third)] font-serif">
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
                  className={`font-serif text-lg font-bold transition-colors duration-300 ${
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
