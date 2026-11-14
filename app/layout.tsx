import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const titulo = "Amanda Souza | Miss Continente Brasil de Las Américas 2026";
const descricao =
  "Conheça Amanda Souza, Miss Continente Brasil de Las Américas 2026, rumo à etapa internacional em Punta Cana. Seja um patrocinador dessa missão.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.amandamiss.com.br"),
  title: titulo,
  description: descricao,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Amanda Souza",
    title: titulo,
    description: descricao,
    images: [{ url: "/amanda/hero.jpg", width: 854, height: 1280, alt: "Amanda Souza, Miss Continente Brasil" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}