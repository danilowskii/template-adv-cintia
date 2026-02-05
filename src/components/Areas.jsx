import { Scale, Shield, Gavel, Users, ArrowRight } from "lucide-react";
export default function Areas({ data, wppLink }) {
  const practiceAreas = [
    {
      title: "Direito Civil",
      desc: "Soluções completas para conflitos de interesses, contratos e responsabilidade civil.",
      icon: <Scale className="w-8 h-8 text-[var(--primary)]" />,
    },
    {
      title: "Direito Trabalhista",
      desc: "Defesa estratégica para empresas e empregados em litígios trabalhistas complexos.",
      icon: <Users className="w-8 h-8 text-[var(--primary)]" />,
    },
    {
      title: "Direito Empresarial",
      desc: "Consultoria jurídica preventiva e contenciosa para proteção do seu patrimônio.",
      icon: <Shield className="w-8 h-8 text-[var(--primary)]" />,
    },
    {
      title: "Direito Penal",
      desc: "Atuação discreta e combativa em todas as fases do processo penal.",
      icon: <Gavel className="w-8 h-8 text-[var(--primary)]" />,
    },
  ];
  return (
    <section
      id="áreas de atuação"
      style={{
        "--bg": data.colors.bg,
        "--primary": data.colors.primary,
        "--secondary": data.colors.secondary,
        "--text": data.colors.text,
        "--shadow": data.colors.shadow,
        "--hover-shadow": data.colors.hoverShadow,
      }}
      className="py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-xs font-bold text-[var(--primary)] uppercase tracking-[0.3em] mb-4">
            Especialidades
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white font-serif mb-6">
            Atuação Jurídica{" "}
            <span className="italic text-[var(--primary)]">Premium</span>
          </h3>
          <p className="text-slate-400">
            Nossa equipe multidisciplinar oferece suporte técnico em diversas
            áreas do direito, com foco na máxima eficiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-8 rounded-sm hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[var(--primary)] to-transparent opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-sm"></div>

              <div className="relative z-10">
                <div className="mb-6 p-4 bg-[var(--bg)] w-fit rounded-lg border border-white/10 group-hover:border-[var(--primary)] group-hover:scale-110 transition-all duration-300 shadow-lg">
                  {area.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 font-serif border-b border-white/5 pb-2 inline-block">
                  {area.title}
                </h4>
                <p className="text-[var(--text)] text-sm leading-relaxed mb-6">
                  {area.desc}
                </p>
                <a
                  href={wppLink}
                  target="_blank"
                  className="group inline-flex items-center text-xs font-bold text-[var(--primary)] uppercase tracking-wider hover:text-white transition-colors"
                >
                  Saiba mais{" "}
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:ml-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
