import Image from "next/image";
import { linkWhatsApp } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";
import { WhatsAppIcon } from "./whatsapp-icon";

export function Proyectos() {
  return (
    <section
      id="proyectos"
      aria-labelledby="titulo-proyectos"
      className="bg-grafito text-concreto"
    >
      <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
        <Reveal className="px-5 py-section md:px-8 lg:col-span-5 lg:pr-12">
          <SectionLabel numero="05" tono="oscuro">
            Proyectos
          </SectionLabel>
          <h2
            id="titulo-proyectos"
            className="mt-6 font-heading text-section font-extrabold uppercase [font-stretch:80%] text-balance"
          >
            Preferimos enseñarte obra real
          </h2>
          <div className="mt-8 max-w-[46ch] space-y-5 text-lg leading-relaxed text-niebla">
            <p>
              Estamos reuniendo las fotografías de nuestros proyectos
              terminados para publicarlas aquí.
            </p>
            <p>
              Mientras tanto, escríbenos. Te compartimos fotos y referencias de
              obras parecidas a la que tienes en mente.
            </p>
          </div>
          <a
            href={linkWhatsApp("Hola, KIRASA. ¿Me pueden compartir fotos de obras que hayan hecho?")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ambar mt-10"
          >
            <WhatsAppIcon className="size-5" />
            Pide referencias
          </a>
        </Reveal>

        <div className="relative min-h-80 lg:col-span-7 lg:min-h-full">
          <Image
            src="/images/supervision.webp"
            alt="Dos supervisores con chaleco revisan el avance de una estructura de concreto al atardecer"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-[30%_center]"
          />
          <p className="absolute right-4 bottom-4 bg-carbon/80 px-3 py-1.5 text-xs text-niebla backdrop-blur-sm">
            Imagen ilustrativa
          </p>
        </div>
      </div>
    </section>
  );
}
