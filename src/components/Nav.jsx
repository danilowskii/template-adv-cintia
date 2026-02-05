import { useState } from "react";
import { Scale, Menu, X, ChevronRight } from "lucide-react";

export default function Nav({ data, wppLink }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      style={{
        "--bg": data.colors.bg,
        "--primary": data.colors.primary,
        "--secondary": data.colors.secondary,
        "--text": data.colors.text,
      }}
      className="fixed w-full top-0 z-50 transition-all duration-300"
    >
      <div
        className={`absolute inset-0 bg-[var(--bg)]/70 backdrop-blur-md border-b border-white/5 shadow-lg`}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div
              className={`p-2 bg-[var(--primary)]/10 rounded-lg border border-[var(--primary)]/20 group-hover:border-[var(--primary)]/50 transition-colors`}
            >
              <Scale className={`w-8 h-8 text-[var(--primary)]`} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight uppercase font-serif">
                Magalhães
              </h1>
              <p
                className={`text-[10px] text-[var(--primary)] font-bold tracking-[0.2em] uppercase`}
              >
                Advocacia Premium
              </p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            {["Início", "Sobre", "Áreas de Atuação"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium text-[var(--text)] hover:text-white transition-all uppercase tracking-widest relative group`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all group-hover:w-full`}
                ></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a
              href={wppLink}
              target="_blank"
              className={`relative overflow-hidden group bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] text-[var(--bg)] px-8 py-3 rounded-sm text-sm font-bold shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300`}
            >
              <span className="relative z-10 flex items-center gap-2">
                Agendar Consulta <ChevronRight className="w-4 h-4" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-110%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className={`md:hidden bg-[var(--bg)]/95 backdrop-blur-xl border-b border-white/10 absolute w-full`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {["Início", "Sobre", "Áreas de Atuação", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 text-base font-medium text-[var(--text)] hover:text-[var(--primary)] hover:bg-white/5 rounded-md border-l-2 border-transparent hover:border-[var(--primary)]`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
