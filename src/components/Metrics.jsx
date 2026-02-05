export default function Metrics({ data }) {
  const metrics = [
    { num: "15+", label: "Anos de Mercado" },
    { num: "2.5k", label: "Casos Vencidos" },
    { num: "98%", label: "Satisfação" },
    { num: "24h", label: "Plantão Urgente" },
  ];
  return (
    <div
      style={{
        "--bg": data.colors.bg,
        "--primary": data.colors.primary,
        "--secondary": data.colors.secondary,
        "--text": data.colors.text,
      }}
      className="relative z-20 -mt-10 mx-4 md:mx-auto max-w-6xl"
    >
      <div className="bg-[var(--bg)]/40 backdrop-blur-xl border border-white/10 rounded-lg p-8 shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {metrics.map((stat, idx) => (
            <div key={idx} className="px-4">
              <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[var(--text)] font-serif">
                {stat.num}
              </p>
              <p className="text-[var(--primary)] text-xs font-bold uppercase tracking-widest mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
