import { Shield, ArrowRight } from "lucide-react";

export default function Hero({ data, wppLink }) {
  return (
    <section
      id="início"
      style={{
        "--bg": data.colors.bg,
        "--primary": data.colors.primary,
        "--secondary": data.colors.secondary,
        "--text": data.colors.text,
        "--shadow": data.colors.shadow,
        "--hover-shadow": data.colors.hoverShadow,
      }}
      // Mantemos o flex-col e items-center para centralizar horizontalmente tudo que estiver dentro
      className="relative h-screen flex flex-col items-center justify-between overflow-hidden"
    >
      {/* Espaçador superior para empurrar o conteúdo para baixo */}
      <div className="flex-grow"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 lg:pb-20">
        {/* Removido o Grid para permitir a centralização real do bloco de texto */}
        <div className="flex flex-col items-center text-start animate-fade-in-up space-y-6">
          {/* Mantido seu comentário original */}
          {/*<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse shadow-[0_0_10px_#f59e0b]"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-[var(--primary)]">
              Disponível para urgências
            </span>
          </div>*/}

          <div className="space-y-2 flex flex-col items-start max-w-xl 2xl:max-w-3xl">
            <p className="text-xl text-[var(--text)] max-w-xs leading-relaxed">
              Defesa previdenciária para profissionais máritmos e offshore
            </p>
            <h2 className="text-4xl 2xl:text-5xl text-[var(--text)] leading-[1.2] font-serif uppercase tracking-tight">
              Com expertise técnica e
              <span className="pl-2 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] drop-shadow-lg">
                vivência real da profissão
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a
                href={wppLink}
                target="_blank"
                className="flex items-center justify-center gap-2 bg-[var(--primary)] text-[var(--bg)] px-8 py-4 rounded-sm font-bold hover:bg-[var(--secondary)] transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:scale-[1.03]"
              >
                Falar com Advogado <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#sobre"
                className="flex items-center justify-center px-8 py-4 rounded-sm font-bold text-white border border-white/20 hover:bg-white/5 hover:border-[var(--secondary)] transition-all backdrop-blur-sm"
              >
                Conhecer Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
