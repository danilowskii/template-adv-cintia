import {
  Scale,
  Shield,
  Anchor,
  ArrowRight,
  Landmark,
  Calculator,
  FileSearch,
  HeartPulse,
  HardHat,
  Gavel,
} from "lucide-react";

export default function Areas({ data, wppLink }) {
  const practiceAreas = [
    {
      title: "Isenção de Imposto de Renda",
      desc: "Análise e restituição de IRPF sobre verbas indenizatórias para profissionais embarcados e casos de doenças graves.",
      icon: <Landmark className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      title: "Previdenciário Marítimo e Offshore",
      desc: "Concessão de aposentadoria especial, cálculo de tempo de contribuição e análise de exposição a agentes nocivos a bordo.",
      icon: <Anchor className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      title: "Planejamento Previdenciário",
      desc: "Preparo antecipado e estratégico para garantir segurança financeira e a obtenção do benefício mais vantajoso no futuro.",
      icon: <Calculator className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      title: "Aposentadorias",
      desc: "Análise completa do histórico contributivo para conquistar o melhor benefício no menor tempo possível, sem surpresas.",
      icon: <Shield className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      title: "Revisão de Benefícios",
      desc: "Auditoria de cálculos do INSS para aposentados, corrigindo períodos ignorados e teses para aumentar o valor recebido.",
      icon: <FileSearch className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      title: "Incapacidade Comum",
      desc: "Suporte completo no pedido de auxílio-doença e aposentadoria por invalidez para trabalhadores impedidos de atuar.",
      icon: <HeartPulse className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      title: "Incapacidade Acidentária",
      desc: "Defesa em acidentes de trabalho e doenças ocupacionais, garantindo o nexo causal, estabilidade e benefício justo.",
      icon: <HardHat className="w-6 h-6 text-[var(--primary)]" />,
    },
    {
      title: "Direito Trabalhista",
      desc: "Proteção de direitos no mar: análise de contratos, jornadas, horas extras e verbas rescisórias para marítimos.",
      icon: <Gavel className="w-6 h-6 text-[var(--primary)]" />,
    },
  ];

  return (
    <section
      id="areas"
      style={{
        "--bg": data.colors.bg,
        "--primary": data.colors.primary,
        "--secondary": data.colors.secondary,
        "--text": data.colors.text,
      }}
      className="py-16 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-[var(--primary)] uppercase tracking-[0.3em] mb-4">
            Especialidades
          </h2>
          <h3 className="text-3xl md:text-5xl text-white font-cinzel mb-6">
            Atuação Jurídica{" "}
            <span className="italic text-[var(--primary)]">Premium</span>
          </h3>
          <p className="text-slate-400">
            Atendimento especializado na representação técnica e jurídica em
            âmbito Marítimo e Offshore, garantindo sigilo, ética e eficiência na
            defesa dos profissionais do mar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-md">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="group relative bg-white/5 border border-white/5 p-6 rounded-sm hover:bg-white/10 transition-[transform,background-color] duration-300 hover:-translate-y-2"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[var(--primary)] to-transparent opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-sm"></div>

              <div className="relative z-10 flex justify-between flex-col h-full">
                <div>
                  <div className="mb-6 p-4 bg-[var(--bg)] w-fit rounded-lg border border-white/10 group-hover:border-[var(--primary)] group-hover:scale-110 transition-all duration-300 shadow-lg">
                    {area.icon}
                  </div>
                  <h4 className="text-xl text-white mb-3 font-serif border-b border-white/5 pb-2 inline-block">
                    {area.title}
                  </h4>
                  <p className="text-[var(--text)] text-sm leading-relaxed mb-6">
                    {area.desc}
                  </p>
                </div>
                <div>
                  <a
                    href={wppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center text-xs font-bold text-[var(--primary)] uppercase tracking-wider hover:text-white transition-colors"
                  >
                    Saiba mais{" "}
                    <ArrowRight className="w-3 h-3 ml-2 group-hover:ml-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
