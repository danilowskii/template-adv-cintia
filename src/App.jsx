import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Areas from "./components/Areas";
import About from "./components/About";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import Loc from "./components/Loc";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { ScrollReveal, Appear } from "./components/Motion";

const LawFirmWebsite = () => {
  const data = {
    colors: {
      bg: "#020617",
      primary: "#f59e0b",
      secondary: "#c97c24",
      third: "#fff",
      text: "#cbd5e1",
      shadow: "0 0 20px rgba(245, 158, 11, 0.3)",
      hoverShadow: "0 0 30px rgba(245, 158, 11, 0.5)",
    },
    firmName: "Magalhães & Associados",
    contact: "81999999999",
    instagram: "seuperfil",
    linkedin: "seuperfil",
    facebook: "seuperfil",
    message: "Olá, vim do site e gostaria de mais informações.",
  };

  const messageWhastapp = encodeURIComponent(data.message);
  const whatsappLink = `https://wa.me/55${data.contact}?text=${messageWhastapp}`;

  return (
    <div
      style={{
        "--bg": data.colors.bg,
        "--primary": data.colors.primary,
        "--secondary": data.colors.secondary,
        "--text": data.colors.text,
        "--third": data.colors.third,
      }}
      className={`font-sans text-[var(--text)] antialiased bg-[var(--bg)] selection:bg-[var(--primary)] selection:text-white overflow-x-hidden relative`}
    >
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[120px] opacity-40 mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-amber-800/10 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-slate-800/40 rounded-full blur-[80px]"></div>
      </div>
      <Appear className={`fixed bottom-12 right-12 z-50`}>
        <a className="" href={whatsappLink} target="_blank">
          <div className="flex items-center justify-center">
            <FaWhatsapp className="z-10 absolute w-12 h-12 text-green-500" />
            <div className="z-0 absolute bg-green-400 rounded-full w-10 h-10 animate-ping"></div>
          </div>
        </a>
      </Appear>

      <Nav data={data} wppLink={whatsappLink} />
      <ScrollReveal>
        <Hero data={data} wppLink={whatsappLink} />
      </ScrollReveal>
      <ScrollReveal>
        <Metrics data={data} wppLink={whatsappLink} />
      </ScrollReveal>
      <ScrollReveal>
        <Areas data={data} wppLink={whatsappLink} />
      </ScrollReveal>
      <ScrollReveal>
        <About data={data} wppLink={whatsappLink} />
      </ScrollReveal>
      <ScrollReveal>
        <Faqs data={data} wppLink={whatsappLink} />
      </ScrollReveal>
      <ScrollReveal>
        <Contact data={data} wppLink={whatsappLink} />
      </ScrollReveal>
      <ScrollReveal>
        <Loc data={data} wppLink={whatsappLink} />
      </ScrollReveal>
      <Footer data={data} wppLink={whatsappLink} />
    </div>
  );
};

export default LawFirmWebsite;
