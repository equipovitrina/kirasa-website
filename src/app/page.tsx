import { SiteHeader } from "@/components/kirasa/site-header";
import { Hero } from "@/components/kirasa/hero";
import { Datos } from "@/components/kirasa/datos";
import { Nosotros } from "@/components/kirasa/nosotros";
import { Proceso } from "@/components/kirasa/proceso";
import { Sectores } from "@/components/kirasa/sectores";
import { Servicios } from "@/components/kirasa/servicios";
import { Proyectos } from "@/components/kirasa/proyectos";
import { Contacto } from "@/components/kirasa/contacto";
import { SiteFooter } from "@/components/kirasa/site-footer";
import { WhatsAppFlotante } from "@/components/kirasa/whatsapp-flotante";
import { contacto } from "@/lib/site";

const datosEstructurados = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "KIRASA Constructores",
  url: "https://www.kirasa.com.mx",
  logo: "https://www.kirasa.com.mx/brand/kirasa-logo.png",
  image: "https://www.kirasa.com.mx/images/og-kirasa.jpg",
  description:
    "Constructora familiar de Navojoa, Sonora. Diseño, construcción, ampliaciones y remodelaciones residenciales, comerciales e industriales.",
  telephone: `+${contacto.whatsapp}`,
  email: contacto.correo,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${contacto.calle}, ${contacto.colonia}`,
    addressLocality: "Navojoa",
    addressRegion: "Sonora",
    addressCountry: "MX",
  },
  areaServed: { "@type": "State", name: "Sonora" },
};

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-ambar focus:px-4 focus:py-3 focus:font-semibold focus:text-carbon"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <Datos />
        <Nosotros />
        <Proceso />
        <Sectores />
        <Servicios />
        <Proyectos />
        <Contacto />
      </main>
      <SiteFooter />
      <WhatsAppFlotante />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados) }}
      />
    </>
  );
}
