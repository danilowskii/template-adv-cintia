import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact({ data, wppLink }) {
  const [formData, setFormData] = useState({
    nome: "",
    area: "",
    caso: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firmName = data.firmName;
    const phone = data.contact;

    const message = `
    Olá, ${firmName}! 
    Meu nome é ${formData.nome} e estou entrando em contato para discutir um caso na área de ${formData.area}. 
    
    Aqui estão os detalhes do meu caso: 
    ${formData.caso}. 
    
    Fico no aguardo do retorno Obrigado!
    `;

    const whatsappUrl = `https://wa.me/55${phone}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };
  return (
    <section
      id="contato"
      style={{
        "--bg": data.colors.bg,
        "--primary": data.colors.primary,
        "--secondary": data.colors.secondary,
        "--text": data.colors.text,
        "--third": data.colors.third,
      }}
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute right-0 top-20 w-1/2 h-full bg-gradient-to-l from-[var(--bg)] to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[var(--third)]">
              Inicie sua Defesa
            </h2>
            <p className="text-[var(--text)] mb-10 text-lg">
              Não deixe suas dúvidas jurídicas sem resposta. Entre em contato
              hoje mesmo e tenha uma análise preliminar com sigilo absoluto.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-slate-950 transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-[var(--primary)] uppercase tracking-widest font-">
                    Contato Rápido
                  </p>
                  <a
                    href={wppLink}
                    target="_blank"
                    className="text-xl font- text-[var(--third)]"
                  >
                    (81) 99607-0732
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--bg)] transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-[var(--primary)] uppercase tracking-widest font-">
                    Email Corporativo
                  </p>
                  <p className="text-md md:text-lg  text-[var(--third)]">
                    contato@cintiaalbuquerque.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-[var(--bg)] transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-[var(--primary)] uppercase tracking-widest ">
                    Remoto
                  </p>
                  <p className="text-md md:text-lg font- text-[var(--third)]">
                    Atendimento presencial mediante agendamento
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-50"></div>

            <h3 className="text-2xl  text-[var(--third)] mb-8 font-serif">
              Conte-nos seu caso
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="gap-5">
                <div>
                  <label
                    htmlFor="nome"
                    className="block text-xs font-bold text-[var(--text)] mb-2 uppercase tracking-wide"
                  >
                    Nome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--bg)] border border-white/10 rounded-sm focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none text-white placeholder-[var(--text)] transition-all"
                    placeholder="Seu nome"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="area"
                  className="block text-xs font-bold text-[var(--text)] mb-2 uppercase tracking-wide"
                >
                  Área
                </label>
                <select
                  id="area"
                  required
                  value={formData.area}
                  name="area"
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[var(--bg)] border border-white/10 rounded-sm focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none text-[var(--third)] transition-all appearance-none"
                >
                  <option value="" className="bg-[var(--bg)]">
                    Selecione uma área
                  </option>
                  <option
                    value="Direito Previdenciário"
                    className="bg-[var(--bg)]"
                  >
                    Direito Previdenciário
                  </option>
                  <option value="Direito Tributário" className="bg-[var(--bg)]">
                    Direito Tributário
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="caso"
                  className="block text-xs font-bold text-[var(--text)] mb-2 uppercase tracking-wide"
                >
                  Caso
                </label>
                <textarea
                  id="caso"
                  value={formData.caso}
                  name="caso"
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-[var(--bg)] border border-white/10 rounded-sm focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] outline-none text-[var(--third)] placeholder-[var(--text)] transition-all"
                  placeholder="Descreva brevemente..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--secondary)] hover:bg-[var(--primary)] text-slate-950 font-bold py-4 px-4 rounded-sm transition-all duration-300 shadow-[var(--primary)] hover:shadow-[var(--secondary)] uppercase tracking-widest text-sm"
              >
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
