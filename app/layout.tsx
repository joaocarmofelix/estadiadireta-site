import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const SITE_URL = "https://estadiadireta.com";
const SITE_TITLE = "EstadiaDireta: Sites para Alojamento Local";
const SITE_DESCRIPTION =
  "Sites profissionais para Alojamento Local em Portugal, pensados para ajudar a ser encontrado no Google e a transformar visitas em reservas diretas.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "EstadiaDireta",
    locale: "pt_PT",
    type: "website",
  },
  icons: {
    icon: "https://res.cloudinary.com/duan4iac7/image/upload/v1789726484/logo_icon_z15qov.png",
    shortcut:
      "https://res.cloudinary.com/duan4iac7/image/upload/v1789726484/logo_icon_z15qov.png",
    apple:
      "https://res.cloudinary.com/duan4iac7/image/upload/v1789726484/logo_icon_z15qov.png",
  },
  // Depois de criares a propriedade no Google Search Console, cola aqui o
  // codigo de verificacao que te derem (metodo "tag HTML"), so o valor do
  // atributo content, sem o resto da tag:
  // verification: { google: "COLAR_AQUI_O_CODIGO" },
};

// Dados estruturados (JSON-LD) para o Google perceber que este site e a
// EstadiaDireta oficial, o que ajuda a aparecer corretamente quando alguem
// pesquisa pelo nome da marca.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EstadiaDireta",
  url: SITE_URL,
  logo: "https://res.cloudinary.com/duan4iac7/image/upload/v1788646560/logo_eegmge.png",
  email: "estadiadireta@gmail.com",
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
