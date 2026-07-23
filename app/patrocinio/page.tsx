import Link from "next/link";
import Footer from "@/app/components/Footer";

export default function PatrocinioPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.3em]"
          >
            Amanda Souza
          </Link>

          <Link
            href="/"
            className="text-sm text-white/70 transition hover:text-[#D4AF37]"
          >
            Voltar para o site
          </Link>
        </div>
      </header>

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28">
        <img
  src="/amanda/hero.jpg"
  alt="Amanda Souza"
  className="absolute -top-16 left-0 h-[115%] w-full object-cover"
/>

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl py-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
              Oportunidade de patrocínio
            </p>

            <h1
              className="text-5xl leading-[0.95] md:text-7xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Sua marca ao lado da Miss Rio Grande do Sul.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
              Conecte sua empresa a uma jornada de representatividade,
              elegância, influência e alcance nacional.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/midia-kit-amanda-souza.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:scale-105"
              >
                Ver mídia kit
              </a>

              <a
                href="#contato"
                className="inline-flex justify-center rounded-full border border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                Falar sobre parceria
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
              Por que apoiar Amanda
            </p>

            <h2
              className="text-4xl leading-tight md:text-6xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Uma parceria que une imagem, propósito e visibilidade.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Representatividade",
                text: "Amanda representa oficialmente o Rio Grande do Sul em uma jornada de alcance nacional.",
              },
              {
                number: "02",
                title: "Presença digital",
                text: "Conteúdo constante, imagem profissional e relacionamento próximo com o público.",
              },
              {
                number: "03",
                title: "Público engajado",
                text: "Uma comunidade que acompanha, interage e participa ativamente de sua trajetória.",
              },
              {
                number: "04",
                title: "Posicionamento premium",
                text: "Associação com elegância, credibilidade, beleza, propósito e influência.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7"
              >
                <span className="text-sm font-bold text-[#D4AF37]">
                  {item.number}
                </span>

                <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>

                <p className="mt-4 leading-7 text-white/60">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#111111] px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["100 mil+", "Seguidores"],
            ["6 milhões+", "Visualizações"],
            ["1 milhão+", "Interações"],
            ["50+", "Marcas atendidas"],
          ].map(([number, label]) => (
            <div key={label}>
              <strong
                className="block text-4xl text-[#D4AF37] md:text-5xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {number}
              </strong>

              <span className="mt-3 block text-sm uppercase tracking-[0.2em] text-white/55">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
              Possibilidades de parceria
            </p>

            <h2
              className="text-4xl leading-tight md:text-6xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Sua marca presente em cada etapa da jornada.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              As entregas podem ser personalizadas de acordo com os objetivos,
              o posicionamento e o público da sua empresa.
            </p>
          </div>

          <div className="space-y-3">
            {[
              "Conteúdo nas redes sociais",
              "Participação em campanhas publicitárias",
              "Presença da marca durante a jornada",
              "Produções personalizadas",
              "Ações promocionais e institucionais",
              "Associação de imagem",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border-b border-white/10 py-5"
              >
                <span className="text-lg">{item}</span>
                <span className="text-[#D4AF37]">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[32px] border border-white/10">
            <img
              src="/amanda/faixa.jpg"
              alt="Amanda Souza Miss Rio Grande do Sul"
              className="h-[520px] w-full object-cover object-top"
            />
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
              Mídia kit
            </p>

            <h2
              className="text-4xl leading-tight md:text-6xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Conheça todas as possibilidades de parceria.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              Acesse o material completo com apresentação, dados, alcance,
              formatos de entrega e oportunidades para patrocinadores.
            </p>

            <a
              href="/midia-kit-amanda-souza.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:scale-105"
            >
              Acessar mídia kit
            </a>
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="flex min-h-[620px] items-center justify-center px-6 py-24 text-center"
      >
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
            Vamos construir essa parceria
          </p>

          <h2
            className="text-4xl leading-tight md:text-7xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Sua marca pode fazer parte desta jornada.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
            Entre em contato para conhecer as oportunidades disponíveis e
            desenvolver uma parceria alinhada aos objetivos da sua empresa.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://www.instagram.com/amandasouzamiss/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-black"
            >
              Falar no Instagram
            </a>

            <a
              href="/midia-kit-amanda-souza.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full border border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Ver mídia kit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}