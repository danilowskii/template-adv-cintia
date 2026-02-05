export default function Loc({ data }) {
  return (
    <section
      style={{
        "--bg": data.colors.bg,
        "--primary": data.colors.primary,
        "--secondary": data.colors.secondary,
        "--text": data.colors.text,
        "--third": data.colors.third,
      }}
      className="w-full h-96 relative bg-[var(--bg)] border-t border-white/10"
    >
      <div className="absolute top-4 left-4 z-10 bg-[var(--bg)] backdrop-blur-md px-6 py-4 rounded-sm shadow-2xl border-l-4 border-[var(--primary)]">
        <p className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-widest mb-1">
          Nossa Sede
        </p>
        <p className="text-sm font-bold text-[var(--third)]">
          Av. Boa Viagem, 1000
        </p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.390563462924!2d-34.89209732415174!3d-8.11438908199738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1e48f7c6e03d%3A0x6333346430335012!2sAv.%20Boa%20Viagem%2C%201000%20-%20Boa%20Viagem%2C%20Recife%20-%20PE%2C%2051011-000!5e0!3m2!1spt-BR!2sbr!4v1709123456789!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização"
        className=" "
      ></iframe>
    </section>
  );
}
