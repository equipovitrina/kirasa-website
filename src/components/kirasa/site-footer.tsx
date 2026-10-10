import Image from "next/image";
import { contacto, linkWhatsApp, navegacion } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-carbon text-niebla">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Image
            src="/brand/kirasa-logo-negativo.svg"
            alt="KIRASA Constructores"
            width={161}
            height={88}
            className="h-24 w-auto"
          />
          <p className="mt-6 max-w-sm font-heading text-2xl font-bold text-concreto uppercase [font-stretch:80%]">
            Construyendo ideas reales
          </p>
          <p className="mt-2 text-sm">Diseño · Construcción · Remodelación</p>
        </div>

        <nav aria-label="Pie de página" className="lg:col-span-3">
          <h2 className="font-heading text-xs font-semibold tracking-[0.2em] text-concreto uppercase">
            Sitio
          </h2>
          <ul className="mt-4 space-y-1">
            {navegacion.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-block py-1.5 transition-colors duration-150 hover:text-ambar">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <h2 className="font-heading text-xs font-semibold tracking-[0.2em] text-concreto uppercase">
            Contacto
          </h2>
          <address className="mt-4 space-y-3 not-italic">
            <p>
              <a
                href={linkWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-1 transition-colors duration-150 hover:text-ambar"
              >
                WhatsApp {contacto.whatsappVisible}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${contacto.correo}`}
                className="inline-block py-1 transition-colors duration-150 hover:text-ambar"
              >
                {contacto.correo}
              </a>
            </p>
            <p className="leading-relaxed">
              {contacto.calle}
              <br />
              {contacto.colonia}, {contacto.ciudad}
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} KIRASA Constructores. Navojoa, Sonora.</p>
          <p>Las fotografías de este sitio son ilustrativas.</p>
        </div>
        <p className="pb-24 text-center text-xs text-niebla/80 md:pb-6">
          Built with Claude Web Builder by{" "}
          <a
            href="https://tododeia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-ambar"
          >
            Tododeia
          </a>
        </p>
      </div>
    </footer>
  );
}
