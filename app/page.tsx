"use client";

import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { SITE_BODY_HTML } from "./site-markup";

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Mesma logica que existia no <script> do index.html estatico, so que agora
  // as credenciais vem de variaveis de ambiente (NEXT_PUBLIC_...) em vez de
  // estarem escritas diretamente no HTML.
  useEffect(() => {
    const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
    const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const EMAILJS_TEMPLATE_ID_CLIENT =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CLIENT || "";

    const emailjsReady = Boolean(
      EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID_CLIENT
    );

    if (emailjsReady) {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }

    const root = rootRef.current;
    if (!root) return;

    const tierButtons =
      root.querySelectorAll<HTMLAnchorElement>(".tier-select");
    const tierHandlers: { btn: HTMLAnchorElement; fn: () => void }[] = [];

    tierButtons.forEach((btn) => {
      const fn = () => {
        const pkg = btn.getAttribute("data-package");
        const msg = btn.getAttribute("data-message");
        const pkgField = root.querySelector<HTMLSelectElement>("#cf-package");
        const msgField =
          root.querySelector<HTMLTextAreaElement>("#cf-message");
        if (pkgField && pkg) pkgField.value = pkg;
        if (msgField && msg && !msgField.value) msgField.value = msg;
      };
      btn.addEventListener("click", fn);
      tierHandlers.push({ btn, fn });
    });

    const form = root.querySelector<HTMLFormElement>("#contact-form");
    const overlayEl = root.querySelector<HTMLDivElement>("#cf-overlay");
    const overlayTitleEl = root.querySelector<HTMLParagraphElement>(
      "#cf-overlay-title"
    );
    const overlayTextEl = root.querySelector<HTMLParagraphElement>(
      "#cf-overlay-text"
    );
    const overlayCloseBtn = root.querySelector<HTMLButtonElement>(
      "#cf-overlay-close"
    );

    const showOverlay = (
      kind: "success" | "error",
      title: string,
      text: string
    ) => {
      if (!overlayEl || !overlayTitleEl || !overlayTextEl) return;
      overlayTitleEl.textContent = title;
      overlayTitleEl.className = "cf-overlay-title " + kind;
      overlayTextEl.textContent = text;
      overlayEl.hidden = false;
    };

    const hideOverlay = () => {
      if (overlayEl) overlayEl.hidden = true;
    };

    overlayCloseBtn?.addEventListener("click", hideOverlay);

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      if (!form) return;

      if (!emailjsReady) {
        showOverlay(
          "error",
          "Não foi possível enviar",
          "Formulário ainda não está configurado. Contacte-nos diretamente para estadiadireta@gmail.com."
        );
        return;
      }

      const submitBtn = form.querySelector<HTMLButtonElement>(
        "button[type=submit]"
      );
      if (submitBtn) submitBtn.disabled = true;

      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID_CLIENT, form).then(
        () => {
          showOverlay(
            "success",
            "Pedido enviado!",
            "Vamos responder-lhe brevemente. Verifique também a pasta de spam / lixo eletrónico, para confirmar que recebeu o email de confirmação."
          );
          form.reset();
          if (submitBtn) submitBtn.disabled = false;
        },
        () => {
          showOverlay(
            "error",
            "Não foi possível enviar",
            "Tente novamente ou escreva para estadiadireta@gmail.com."
          );
          if (submitBtn) submitBtn.disabled = false;
        }
      );
    };

    form?.addEventListener("submit", handleSubmit);

    return () => {
      tierHandlers.forEach(({ btn, fn }) => btn.removeEventListener("click", fn));
      form?.removeEventListener("submit", handleSubmit);
      overlayCloseBtn?.removeEventListener("click", hideOverlay);
    };
  }, []);

  return <div ref={rootRef} dangerouslySetInnerHTML={{ __html: SITE_BODY_HTML }} />;
}
