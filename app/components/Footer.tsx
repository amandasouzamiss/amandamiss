import Link from "next/link";
import { AtSign, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080808]">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.45em] text-[#D4AF37]">
              Amanda Souza
            </p>

            <h2
              className="text-4xl leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Miss Rio Grande do Sul 2026
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-white/60">
              Representando o Rio Grande do Sul no Miss Brasil de Las Américas,
              inspirando pessoas através da elegância, autenticidade e propósito.
            </p>
          </div>

          {/* Navegação */}

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-white">
              Navegação
            </h3>

            <nav className="flex flex-col gap-3 text-white/60">
              <a
                href="#topo"
                className="transition hover:text-[#D4AF37]"
              >
                Início
              </a>

              <a
                href="#historia"
                className="transition hover:text-[#D4AF37]"
              >
                História
              </a>

              <a
                href="#jornada"
                className="transition hover:text-[#D4AF37]"
              >
                Jornada
              </a>

              <a
                href="#galeria"
                className="transition hover:text-[#D4AF37]"
              >
                Galeria
              </a>

              <Link
                href="/patrocinio"
                className="transition hover:text-[#D4AF37]"
              >
                Patrocínio
              </Link>
            </nav>
          </div>

          {/* Contato */}

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-white">
              Contato
            </h3>

            <div className="space-y-4">
              <a
                href="https://www.instagram.com/amandasouzamiss/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 transition hover:text-[#D4AF37]"
              >
                <AtSign size={18} />
                amandasouzamiss
              </a>

              <a
                href="mailto:contato@amandasouza.com.br"
                className="flex items-center gap-3 text-white/60 transition hover:text-[#D4AF37]"
              >
                <Mail size={18} />
                oie.amandasouza@gmail.com
              </a>
            </div>

            <Link
              href="/patrocinio"
              className="mt-8 inline-flex rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:scale-105"
            >
              Seja patrocinador
            </Link>
          </div>
        </div>

        {/* Linha */}

        <div className="my-10 h-px bg-white/10" />

        {/* Rodapé inferior */}

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/40">
            © {new Date().getFullYear()} Amanda Souza. Todos os direitos
            reservados.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#topo"
              className="flex items-center gap-2 text-sm text-white/40 transition hover:text-[#D4AF37]"
            >
              <ArrowUp size={16} />
              Voltar ao topo
            </a>

            <a
              href="https://bpresultados.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/30 transition hover:text-[#D4AF37]"
            >
              Desenvolvido por <span className="text-[#D4AF37]">BP Resultados</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}