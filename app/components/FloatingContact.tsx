"use client";

import { FormEvent, useEffect, useState } from "react";
import { MessageCircle, X, ArrowRight } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);

    const whatsappNumber = "5521996329869";

    const whatsappMessage = `
Olá, Amanda!

Meu nome é ${name}.
E-mail: ${email}

Gostaria de conversar sobre uma oportunidade de parceria.

Mensagem:
${message}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setIsSending(false);
      setIsOpen(false);
    }, 800);
  }

  function closeModal() {
    if (!isSending) {
      setIsOpen(false);
    }
  }

  return (
    <>
      {/* Botão flutuante */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Falar sobre parcerias"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#D4AF37] px-5 py-4 text-sm font-bold text-black shadow-[0_12px_40px_rgba(212,175,55,0.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#E2C45C] md:bottom-7 md:right-7 md:px-6"
      >
        <MessageCircle size={20} />

        <span className="hidden sm:inline">Falar sobre parcerias</span>
        <span className="sm:hidden">Parcerias</span>
      </button>

      {/* Modal */}
      {isOpen && (
  <div
    className="fixed inset-0 z-50 overflow-y-auto bg-black/75 px-4 py-6 backdrop-blur-sm"
    onMouseDown={closeModal}
  >
    <div className="flex min-h-full items-start justify-center md:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
        className="relative my-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D0D0D] shadow-2xl"
      >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.12),transparent_34%)]" />

            <div className="relative p-6 md:p-10">
              <button
                type="button"
                onClick={closeModal}
                aria-label="Fechar formulário"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/60 transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
              >
                <X size={20} />
              </button>

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-[#D4AF37]">
                Contato comercial
              </p>

              <h2
                id="contact-modal-title"
                className="pr-12 text-4xl leading-tight text-white md:text-5xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Vamos construir uma parceria?
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-white/55">
                Preencha os dados abaixo para iniciar uma conversa sobre
                campanhas, eventos, publicidade e oportunidades comerciais.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/55"
                  >
                    Nome
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required
                    disabled={isSending}
                    placeholder="Digite seu nome"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/70 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/55"
                  >
                    E-mail
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    disabled={isSending}
                    placeholder="Digite seu e-mail"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/70 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-white/55"
                  >
                    Mensagem
                  </label>

                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                    disabled={isSending}
                    rows={5}
                    placeholder="Conte brevemente sobre a oportunidade"
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#D4AF37]/70 disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition duration-300 hover:bg-[#E2C45C] disabled:cursor-wait disabled:opacity-70"
                >
                  {isSending ? (
                    "Redirecionando..."
                  ) : (
                    <>
                      Enviar pelo WhatsApp
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-5 text-white/30">
                  Ao enviar, o WhatsApp será aberto com a mensagem preenchida.
                </p>
              </form>

              <div className="mt-7 border-t border-white/10 pt-6 text-center text-sm text-white/40">
                E-mail:{" "}
                <a
                  href="mailto:oie.amandasouza@gmail.com"
                  className="text-white/70 transition hover:text-[#D4AF37]"
                >
                  oie.amandasouza@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
         </div>
)}
      
    </>
  );
}