import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { contacto, linkWhatsApp, mapaEmbed, mapaLink } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";
import { WhatsAppIcon } from "./whatsapp-icon";

export function Contacto() {
  const canales = [
    {
      etiqueta: "WhatsApp",
      valor: contacto.whatsappVisible,
      href: linkWhatsApp(),
      externo: true,
      Icono: WhatsAppIcon,
    },
    {
      etiqueta: "Correo",
      valor: contacto.correo,
      href: `mailto:${contacto.correo}`,
      externo: false,
      Icono: Mail,
    },
    {
      etiqueta: "Oficina",
      valor: `${contacto.calle}, ${contacto.colonia}, ${contacto.ciudad}`,
      href: mapaLink,
      externo: true,
      Icono: MapPin,
    },
  ];

  return (
    <section
      id="contacto"
      aria-labelledby="titulo-contacto"
      className="plano-claro py-section"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionLabel numero="06">Contacto</SectionLabel>
            <h2
              id="titulo-contacto"
              className="mt-6 font-heading text-section font-extrabold uppercase [font-stretch:80%]"
            >
              Hablemos de tu proyecto
            </h2>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
              Cuéntanos qué quieres construir. Con unas fotos del terreno o del
              espacio y una idea general, ya podemos darte una primera
              orientación.
            </p>
          </Reveal>

          <Reveal delay={0.08} as="div" className="mt-10">
            <ul className="border-t border-carbon/15">
              {canales.map(({ etiqueta, valor, href, externo, Icono }) => (
                <li key={etiqueta} className="border-b border-carbon/15">
                  <a
                    href={href}
                    {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group -mx-3 flex min-h-11 items-center gap-5 px-3 py-5 transition-colors duration-150 ease-[var(--ease-out)] active:bg-carbon/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ambar-hondo"
                  >
                    <span className="grid size-12 shrink-0 place-items-center bg-carbon text-ambar">
                      <Icono className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-heading text-xs font-semibold tracking-[0.18em] text-acero uppercase">
                        {etiqueta}
                      </span>
                      <span className="mt-1 block text-lg font-semibold break-words text-carbon md:text-xl">
                        {valor}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-5 shrink-0 text-acero transition-transform duration-200 ease-[var(--ease-out)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-carbon"
                      aria-hidden="true"
                    />
                    {externo && <span className="sr-only">(se abre en otra pestaña)</span>}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={linkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ambar mt-10"
            >
              <WhatsAppIcon className="size-5" />
              Cotiza tu proyecto
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-6">
          <div className="relative h-full min-h-96 overflow-hidden border-4 border-carbon bg-muted">
            <iframe
              src={mapaEmbed}
              title="Mapa: oficina de KIRASA Constructores en Navojoa, Sonora"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full grayscale-[0.85] contrast-[1.05]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
