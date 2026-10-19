import Link from "next/link";
import { ArrowUpRight, Crown } from "lucide-react";
import Image from "next/image";
import Footer from "./components/Footer";
import Partners from "./components/Partners";
import FloatingContact from "./components/FloatingContact";
import Reveal from "./components/Reveal";
import {
  StaggerItem,
  StaggerReveal,
} from "./components/StaggerReveal";

const partnerships = [
  {
    company: "Coroados",
    image: "/amanda/parcerias/parceria1.jpg",
    instagramUrl:
      "https://www.instagram.com/p/DRvMF6sjVvC/?igsh=c2V6MnI1a2RmeDdi",
  },
  {
    company: "Rosa Perfumes",
    image: "/amanda/parcerias/parceria2.jpg",
    instagramUrl:
      "https://www.instagram.com/p/DZddH89GZ7Z/?igsh=aXdkMDV4dXpieHds",
  },
  {
    company: "Magalu",
    image: "/amanda/parcerias/parceria3.jpg",
    instagramUrl:
      "https://www.instagram.com/p/DYnBJD9mf2_/?igsh=MXdlMm1laWQxbHF2dw==",
  },
  {
    company: "Pétala Urbana",
    image: "/amanda/parcerias/parceria4.jpg",
    instagramUrl:
      "https://www.instagram.com/p/DStAvhsALfh/?igsh=cDBxOXhjMm8xeQ==",
  },
  {
    company: "Águas Termais",
    image: "/amanda/parcerias/parceria5.jpg",
    instagramUrl:
      "https://www.instagram.com/p/DMbKw5eRjuD/?igsh=MWg2ZmxlcTZnZG41OA==",
  },
  {
  company: "Antoniolli",
  image: "/amanda/parcerias/parceria6.jpg",
  instagramUrl:
    "https://www.instagram.com/reel/DTgSCR3jyfZ/?igsh=OTBydW81eXN3dXVy",
},
]

const numbers = [
  {
    number: "+100 mil",
    label: "Seguidores",
  },
  {
    number: "+6 milhões",
    label: "Visualizações mensais",
  },
  {
    number: "+1 milhão",
    label: "Interações mensais",
  },
  {
    number: "+50",
    label: "Marcas atendidas",
  },
];

const galleryImages = [
  ...["02", "03", "07", "05", "06", "09", "10", "08"].map((n) => ({
    src: `/amanda/continente/continente-${n}.jpg`,
    alt: `Amanda Souza, Miss Continente Brasil de Las Américas 2026`,
  })),
  ...["29", "30", "31", "32", "27", "14", "03", "08"].map((n) => ({
    src: `/amanda/galeria/bastidor-${n}.jpg`,
    alt: `Amanda Souza com a faixa de Miss Rio Grande do Sul`,
  })),
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#0A0A0A] text-white">
      {/* NAVBAR */}
      <header className="fixed left-1/2 top-5 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-black/45 px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:border-white/15">
        <div className="flex items-center justify-between">
          <a
            href="#topo"
            className="transition duration-300 hover:text-[#D4AF37]"
          >
            <span
              className="text-lg font-semibold tracking-wide"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Amanda Souza
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.22em] text-white/65 lg:flex">
            <a
              href="#conquista"
              className="relative py-2 transition duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
            >
              Conquista
            </a>

            <a
              href="#historia"
              className="relative py-2 transition duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
            >
              História
            </a>

            <a
              href="#jornada"
              className="relative py-2 transition duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
            >
              Trajetória
            </a>

            <a
              href="#galeria"
              className="relative py-2 transition duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
            >
              Galeria
            </a>

            <a
              href="#parcerias"
              className="relative py-2 transition duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
            >
              Parcerias
            </a>
          </nav>

          <div className="flex items-center gap-3">

            <Link
              href="/patrocinio"
              className="group inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_8px_30px_rgba(212,175,55,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E2C45C] hover:shadow-[0_12px_35px_rgba(212,175,55,0.25)] active:translate-y-0 active:scale-[0.98]"
            >
              Seja patrocinador

              <span className="hidden transition-transform duration-300 group-hover:translate-x-1 sm:inline">
                →
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="topo"
        className="relative min-h-[780px] overflow-hidden bg-black"
      >
        <img
          src="/amanda/continente/continente-01.jpg"
          alt="Amanda Souza com a coroa e a faixa de Miss Continente Brasil de Las Américas 2026"
          className="absolute inset-0 h-full w-full object-cover object-[center_12%] lg:left-auto lg:w-[55%]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10 lg:bg-gradient-to-r lg:from-black lg:via-black/85 lg:to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.14),transparent_55%)]" />

        <div className="relative z-10 mx-auto flex min-h-[780px] max-w-7xl items-end px-6 pb-20 pt-32 lg:items-center lg:pb-0">
          <div className="max-w-2xl">
            <Reveal direction="up">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37] backdrop-blur-md">
                <Crown className="h-4 w-4" />
                Coroada em 2026
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.08}>
              <h1 style={{ fontFamily: "var(--font-playfair)" }}>
                <span className="block text-6xl font-bold leading-[0.95] text-[#D4AF37] md:text-8xl">
                  Miss Continente
                </span>

                <span className="mt-3 block text-3xl leading-tight text-white md:text-5xl">
                  Brasil de Las Américas 2026
                </span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.16}>
              <p
                className="mt-8 text-2xl text-white/90 md:text-3xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Amanda Souza
              </p>

              <p className="mt-3 max-w-xl text-lg leading-8 text-white/70">
                Do Rio Grande do Sul para o Brasil: um título conquistado com
                propósito, elegância e autenticidade.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#conquista"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-7 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-black shadow-[0_10px_35px_rgba(212,175,55,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E2C45C] hover:shadow-[0_16px_45px_rgba(212,175,55,0.25)] active:translate-y-0 active:scale-[0.98]"
                >
                  Ver a coroação

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <Link
                  href="/patrocinio"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 hover:text-[#D4AF37] active:translate-y-0 active:scale-[0.98]"
                >
                  Seja patrocinador

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONQUISTA */}
      <section id="conquista" className="bg-black px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal direction="right">
            <div className="group relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/25">
              <img
                src="/amanda/continente/continente-04.jpg"
                alt="Amanda Souza sendo coroada Miss Continente Brasil de Las Américas 2026"
                className="h-[560px] w-full object-cover object-[center_25%] transition duration-1000 ease-out group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
                O título
              </p>

              <h2
                className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Miss Continente{" "}
                <span className="text-[#D4AF37]">
                  Brasil de Las Américas 2026
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
                Miss Rio Grande do Sul 2026, Amanda Souza conquistou o título de
                Miss Continente no Miss Brasil de Las Américas 2026, coroando
                uma trajetória de dedicação, presença e autenticidade.
              </p>

              <div className="mt-9 grid max-w-xl grid-cols-2 gap-4">
                {["02", "03"].map((n) => (
                  <div
                    key={n}
                    className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10"
                  >
                    <Image
                      src={`/amanda/continente/continente-${n}.jpg`}
                      alt="Amanda Souza com a coroa e a faixa de Miss Continente Brasil de Las Américas"
                      fill
                      sizes="(max-width:1024px)50vw,280px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section id="historia" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[430px_1fr]">
          <Reveal direction="right">
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/5">
             <img
  src="/amanda/cinza.jpg"
  alt="Amanda Souza"
  className="h-[520px] w-full object-cover object-[center_18%] transition duration-1000 ease-out group-hover:scale-[1.035]"
/>
              <div className="absolute inset-0 bg-[#D4AF37]/0 transition duration-500 group-hover:bg-[#D4AF37]/[0.035]" />
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
                Quem é Amanda
              </p>

              <h2
                className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Muito além da coroa: uma imagem construída com propósito.
              </h2>

              <div className="mt-7 max-w-3xl space-y-5 text-base leading-8 text-white/68 md:text-lg">
                <p>
                  Amanda Souza é mãe, empresária, influenciadora digital e
                  modelo. Sua trajetória une presença, disciplina e
                  autenticidade.
                </p>

                <p>
                  Eleita Miss Rio Grande do Sul 2026 e coroada Miss Continente
                  Brasil de Las Américas 2026, leva ao cenário nacional uma
                  história real, conectada à representatividade feminina e ao
                  poder de inspirar outras pessoas.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="border-y border-white/10 bg-black">
        <StaggerReveal
          className="mx-auto grid max-w-7xl gap-5 px-6 py-16 sm:grid-cols-2 md:grid-cols-4"
          stagger={0.12}
        >
          {numbers.map((item) => (
            <StaggerItem key={item.label}>
              <div className="group rounded-[1.5rem] border border-transparent px-5 py-7 text-center transition-all duration-500 hover:-translate-y-2 hover:border-white/10 hover:bg-white/[0.025]">
                <h3
                  className="text-4xl font-bold text-[#D4AF37] transition-transform duration-500 group-hover:scale-105 md:text-5xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.number}
                </h3>

                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-white/50 transition duration-300 group-hover:text-white/70">
                  {item.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

      {/* PARA MARCAS */}
      <section id="parcerias" className="bg-[#111111] px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <Reveal direction="right">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
                Para marcas
              </p>

              <h2
                className="text-4xl leading-tight md:text-5xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Associe sua marca a uma imagem de elegância, influência e
                representatividade.
              </h2>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="space-y-5 text-base leading-8 text-white/68">
              <p>
                Amanda Souza une presença digital, imagem premium e
                o prestígio de um título nacional: Miss Continente Brasil de
                Las Américas 2026.
              </p>

              <p>
                Uma parceria com Amanda conecta sua empresa a uma história
                inspiradora, feminina, sofisticada e com forte potencial de
                engajamento.
              </p>

              <div className="flex flex-col gap-3 pt-3 sm:flex-row">
                <Link
                  href="/patrocinio"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-7 py-3 text-sm font-bold uppercase tracking-[0.16em] text-black shadow-[0_10px_35px_rgba(212,175,55,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E2C45C] hover:shadow-[0_16px_45px_rgba(212,175,55,0.25)] active:translate-y-0 active:scale-[0.98]"
                >
                  Seja patrocinador

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <a
                  href="/midia-kit-amanda-souza.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 hover:text-[#D4AF37] active:translate-y-0 active:scale-[0.98]"
                >
                  Ver mídia kit

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* JORNADA */}
      <section
        id="jornada"
        className="group relative min-h-[580px] overflow-hidden bg-black"
      >
        <img
          src="/amanda/faixa.jpg"
          alt="Amanda Souza com a faixa de Miss Rio Grande do Sul"
          className="absolute inset-0 h-full w-full object-cover object-[center_18%] transition duration-[1400ms] ease-out group-hover:scale-[1.025]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/25" />

        <div className="relative z-10 mx-auto flex min-h-[580px] max-w-7xl items-center px-6">
          <Reveal direction="right">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
                A trajetória
              </p>

              <h2
                className="text-4xl leading-tight md:text-6xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Do Rio Grande do Sul ao título de Miss Continente Brasil de
                Las Américas 2026.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">
                Elegância, autenticidade e representatividade que levaram o
                Rio Grande do Sul à coroa nacional.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="bg-[#111111] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-14 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
                Miss Continente Brasil de Las Américas 2026
              </p>

              <h2
                className="mt-4 text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Galeria
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
                A coroação, os bastidores e os ensaios de Amanda Souza, Miss
                Continente Brasil de Las Américas 2026.
              </p>
            </div>
          </Reveal>

          <StaggerReveal
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
            stagger={0.04}
          >
            {galleryImages.map((image) => (
              <StaggerItem key={image.src}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-black">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width:640px)50vw,(max-width:1024px)33vw,25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

    {/* PARCERIAS EM DESTAQUE */}
<section id="parcerias" className="mx-auto max-w-7xl px-6 py-24">
  <Reveal>
    <div className="mb-14 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
        Marcas e projetos
      </p>

      <h2
        className="mt-4 text-4xl md:text-5xl"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Parcerias em Destaque
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/55">
        Campanhas desenvolvidas ao lado de marcas que acreditam em imagem,
        autenticidade e conexão com seu público.
      </p>
    </div>
  </Reveal>

  <StaggerReveal
    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    stagger={0.12}
  >
    {partnerships.map((partnership) => (
      <StaggerItem key={partnership.company}>
        <a
          href={partnership.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver publicação da parceria com ${partnership.company}`}
          className="group block"
        >
          <div className="relative h-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-[#111] transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)]">

            <Image
              src={partnership.image}
              alt={partnership.company}
              fill
              sizes="(max-width:768px)100vw,(max-width:1024px)50vw,33vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute inset-0 bg-[#D4AF37]/0 transition-colors duration-500 group-hover:bg-[#D4AF37]/[0.03]" />

            <div className="absolute bottom-0 left-0 right-0 p-7">

              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                PARCERIA
              </p>

              <div className="flex items-end justify-between gap-4">

                <div className="flex-1">
                  <h3
                    className="text-3xl leading-tight text-white"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {partnership.company}
                  </h3>

                  <p className="mt-3 text-sm text-white/70">
                    Ver publicação no Instagram
                  </p>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black">
                  <ArrowUpRight className="h-6 w-6" />
                </div>

              </div>

            </div>

          </div>
        </a>
      </StaggerItem>
    ))}
  </StaggerReveal>
</section>

      <Reveal>
        <Partners />
      </Reveal>

      <Footer />

      <FloatingContact />
    </main>
  );
}