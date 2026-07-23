"use client";

import Image from "next/image";

const partners = [
  "/amanda/logos/logo1.png",
  "/amanda/logos/logo2.png",
  "/amanda/logos/logo3.png",
  "/amanda/logos/logo4.png",
  "/amanda/logos/logo5.png",
  "/amanda/logos/logo6.png",
  "/amanda/logos/logo7.png",
  "/amanda/logos/logo8.png",
];

const repeatedPartners = Array.from({ length: 8 }, () => partners).flat();

export default function Partners() {
  return (
    <section
      id="parceiros"
      className="relative overflow-hidden bg-[#0A0A0A] py-28"
    >
      <div className="mx-auto mb-16 max-w-4xl px-6 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
          Marcas Parceiras
        </p>

        <h2
          className="text-4xl font-light text-white md:text-5xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Empresas que confiaram em Amanda Souza
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
          Ao longo da sua trajetória, Amanda participou de campanhas,
          editoriais e ações para marcas que acreditam na força de uma imagem
          construída com autenticidade, profissionalismo e propósito.
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade esquerdo */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent" />

        {/* Fade direito */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent" />

        <div className="animate-marquee flex w-max items-center">
          {repeatedPartners.map((logo, index) => (
            <div
              key={index}
              className="mx-12 flex h-24 w-[180px] shrink-0 items-center justify-center"
            >
              <Image
                src={logo}
                alt="Marca parceira"
                width={180}
                height={90}
                className="h-12 w-auto object-contain opacity-60 grayscale transition-all duration-500 hover:scale-110 hover:opacity-100 hover:grayscale-0 md:h-14"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}