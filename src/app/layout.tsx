import type { Metadata, Viewport } from "next";
import { Archivo, Public_Sans } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kirasa.com.mx"),
  title: "KIRASA Constructores | Construcción en Navojoa y todo Sonora",
  description:
    "Constructora familiar de Navojoa con más de 15 años. Diseño, construcción y remodelación de obra residencial, comercial e industrial en Sonora.",
  keywords: [
    "constructora Navojoa",
    "construcción Sonora",
    "remodelaciones Navojoa",
    "naves industriales Sonora",
    "KIRASA Constructores",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "KIRASA Constructores — Construyendo ideas reales",
    description:
      "Diseño, construcción y remodelación en Sonora. Obra residencial, comercial e industrial.",
    url: "/",
    siteName: "KIRASA Constructores",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/og-kirasa.jpg",
        width: 1120,
        height: 630,
        alt: "Estructura de concreto en construcción al atardecer, en Sonora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KIRASA Constructores — Construyendo ideas reales",
    description:
      "Diseño, construcción y remodelación en Sonora. Obra residencial, comercial e industrial.",
    images: ["/images/og-kirasa.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#15191c",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${archivo.variable} ${publicSans.variable} antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
