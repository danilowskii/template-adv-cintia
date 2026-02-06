import React, { lazy, Suspense } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

import { FaWhatsapp } from "react-icons/fa";
import { ScrollReveal, Appear } from "./components/Motion";
import shipBg from "./assets/ship.webp";
import logoNome from "./assets/logo-nome.webp";

// Lazy imports
const Metrics = lazy(() => import("./components/Metrics"));
const Areas = lazy(() => import("./components/Areas"));
const Faqs = lazy(() => import("./components/Faqs"));
const Footer = lazy(() => import("./components/Footer"));

const LawFirmWebsite = () => {
  const data = {
    colors: {
      bg: "#10192c",
      primary: "#e7e8e4",
      secondary: "#a9abae",
      third: "#fff",
      text: "#e7e8e4",
      shadow: "0 0 20px rgba(245, 158, 11, 0.3)",
      hoverShadow: "0 0 30px rgba(245, 158, 11, 0.5)",
    },
    firmName: "Cíntia Albuquerque",
    contact: "81996070732",
    instagram: "cintiaalbuquerqueadv/",
    linkedin: "cintia-albuquerque/",
    facebook: "seuperfil",
    message:
      "Olá, Cíntia! Vim pelo seu site e gostaria de um atendimento personalizado.",
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
      className="font-sans text-[var(--text)] antialiased bg-[var(--bg)] selection:bg-[var(--primary)] selection:text-black overflow-x-hidden relative"
    >
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[40px] opacity-40"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-amber-800/10 rounded-full blur-[40px] opacity-30"></div>
      </div>

      <Appear className="fixed bottom-12 right-12 z-50">
        <a
          aria-label="WhatsApp"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-center">
            <FaWhatsapp className="z-10 absolute w-12 h-12 text-green-500" />
            <div className="z-0 absolute bg-green-400 rounded-full w-10 h-10 animate-ping"></div>
          </div>
        </a>
      </Appear>

      <Nav data={data} wppLink={whatsappLink} />

      <section className="relative min-h-screen overflow-hidden">
        <img
          src={logoNome}
          alt="Cíntia Albuquerque"
          fetchpriority="high"
          className="pointer-events-none absolute z-10 top-[14%] left-1/2 -translate-x-1/2 md:-translate-x-0 md:top-[40%] md:-translate-y-1/2 md:left-[8%] w-[50%] md:w-[20%] max-w-md"
        />
        <img
          src={shipBg}
          fetchpriority="high"
          className="pointer-events-none absolute opacity-60 inset-0 w-full h-full object-cover -z-0"
          alt="Navio"
          loading="eager"
        />
        <Hero data={data} wppLink={whatsappLink} />
      </section>

      <Suspense fallback={<div className="h-screen bg-[#10192c]" />}>
        <Metrics data={data} wppLink={whatsappLink} />

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
        <Footer data={data} wppLink={whatsappLink} />
      </Suspense>
    </div>
  );
};

export default LawFirmWebsite;
