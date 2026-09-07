# EstadiaDireta — site (Next.js)

Este projeto é a versão Next.js do site, criada a partir do `index.html`
estático, sem alterações visuais nem de comportamento. A única mudança real
é onde vivem as credenciais do EmailJS: em vez de estarem escritas no HTML,
agora vêm de variáveis de ambiente.

## Estrutura

- `app/layout.tsx` — `<html>`/`<head>` (título, descrição, fontes do Google).
- `app/globals.css` — o CSS do site, copiado tal e qual do `<style>` original.
- `app/site-markup.ts` — a marcação HTML de `<nav>` até `<footer>`, preservada
  exatamente como estava no `index.html`.
- `app/page.tsx` — injeta essa marcação e liga o mesmo comportamento que
  antes estava no `<script>` do fundo da página (botões de pacote no
  formulário + envio do email via EmailJS, usando só o template do
  cliente — o próprio dono recebe uma cópia por Bcc, configurado no
  dashboard do EmailJS), agora lendo as credenciais de `process.env`.
  Ao submeter, mostra uma caixa flutuante sobre o formulário com o
  resultado (sucesso ou erro), em vez de um texto simples por baixo.

## Antes de correr localmente

```bash
npm install
cp .env.local.example .env.local
# edite .env.local e preencha os 3 valores com as credenciais reais do EmailJS
npm run dev
```

Abre em http://localhost:3000

## Publicar na Vercel

1. Suba este projeto para um repositório Git (GitHub, GitLab, etc.) — o
   `.gitignore` já exclui `node_modules`, `.next` e os ficheiros `.env*`.
2. Na Vercel, importe o repositório (New Project → Import).
3. Em **Project Settings → Environment Variables**, adicione estas 3
   variáveis (para Production e Preview) com os valores reais do EmailJS:
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CLIENT`
4. Faça o deploy. A Vercel deteta o Next.js automaticamente (não precisa de
   configurar mais nada).

**Nota sobre segurança:** o prefixo `NEXT_PUBLIC_` é obrigatório para que
estas variáveis cheguem ao código que corre no browser do visitante — sem
ele, o formulário não teria acesso às credenciais e o envio de email falharia.
Isto significa que estes valores continuam visíveis a quem inspecionar o
site, tal como já acontecia no HTML estático — não há forma de esconder
credenciais só de client-side. A proteção real contra abuso configura-se no
dashboard do EmailJS, em **Account → Security → Allowed origins** (restringir
a domínios como `estadiadireta.pt`), e opcionalmente com reCAPTCHA.

## Build de produção (para testar antes de publicar)

```bash
npm run build
npm run start
```
