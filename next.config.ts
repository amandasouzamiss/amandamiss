import type { NextConfig } from "next";

// Proteções básicas em todas as páginas (o HSTS a Vercel já manda).
const SEGURANCA = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
];

const nextConfig: NextConfig = {
  // Menos larguras por imagem: a home tem ~90 fotos e cada largura extra engordava o HTML.
  images: {
    deviceSizes: [640, 1080, 1920],
    imageSizes: [256],
  },
  async headers() {
    return [{ source: "/:path*", headers: SEGURANCA }];
  },
};

export default nextConfig;
