import logo from "../assets/logo.webp";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer({ data, wppLink }) {
  const socialIcons = [
    {
      id: "ig",
      icon: <FaInstagram className="w-6 h-6" />,
      link: `https://www.instagram.com/${data.instagram}`,
    },
    {
      id: "li",
      icon: <FaLinkedin className="w-6 h-6" />,
      link: `https://www.linkedin.com/in/${data.linkedin}`,
    },

    {
      id: "wpp",
      icon: <FaWhatsapp className="w-6 h-6" />,
      link: wppLink,
    },
  ];
  return (
    <footer
      style={{
        "--bg": data.colors.bg,
        "--primary": data.colors.primary,
        "--secondary": data.colors.secondary,
        "--text": data.colors.text,
        "--third": data.colors.third,
      }}
      className="bg-[#121927] text-[var(--text)] py-16 border-t border-white/10 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 w-12 h-12">
                <img src={logo} alt="" />
              </div>
              <span className="text-2xl  text-[var(--third)] uppercase tracking-tight font-serif">
                Cíntia Albuquerque
              </span>
            </div>
            <p className="text-sm max-w-sm mb-8 leading-relaxed">
              A segurança jurídica que o profissional do mar precisa, com a
              expertise de quem já esteve a bordo. De marítimo para marítimo,
              protegendo o seu futuro.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[var(--primary)] hover:text-black hover:border-[var(--primary)] transition-all cursor-pointer"
                >
                  <a href={social.link} target="_blank">
                    <span className="font-bold text-xs">{social.icon}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[var(--third)] font-bold mb-6 uppercase text-xs tracking-[0.2em]">
              Links Rápidos
            </h4>
            <ul className="space-y-3 text-sm">
              {["Início", "Áreas de Atuação", "Entre em contato"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-[var(--primary)] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[var(--primary)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 {data.firmName}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido por{" "}
            <a
              href="https://www.linkedin.com/in/paivadanilo/"
              target="_blank"
              className="text-[var(--third)] font-bold hover:text-[var(--primary)] transition-colors"
            >
              Danilo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
