import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function Nosotros() {
  return (
    <section
      id="nosotros"
      aria-labelledby="titulo-nosotros"
      className="plano-claro py-section"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6 lg:pt-4">
          <Reveal>
            <SectionLabel numero="01">Sobre KIRASA</SectionLabel>
            <h2
              id="titulo-nosotros"
              className="mt-6 font-heading text-section font-extrabold uppercase [font-stretch:80%] text-balance"
            >
              Una empresa familiar que se hizo en la obra
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="mt-8 max-w-[58ch] space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              KIRASA nació en Navojoa como empresa familiar y lleva más de
              quince años trabajando en Sonora. Hacemos obra nueva y también
              intervenimos lo que ya está construido: ampliaciones,
              remodelaciones, mantenimiento.
            </p>
            <p>
              Diseñamos, presupuestamos, construimos y supervisamos. Tener todo
              eso en una sola empresa significa menos intermediarios y alguien
              concreto a quien pedirle cuentas.
            </p>
            <p className="font-medium text-carbon">
              Nos importa entregar en la fecha que acordamos. Suena básico. En
              este oficio no lo es.
            </p>
          </Reveal>

          <Reveal delay={0.12} className="mt-10">
            <a href="#proceso" className="btn btn-linea-oscura">
              Cómo trabajamos
              <ArrowRight className="flecha size-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/images/equipo.webp"
              alt="Tres profesionales con casco revisan planos en una obra de concreto"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-[60%_center]"
            />
          </div>
          {/* Cota de plano: marca el ancho de la foto */}
          <div aria-hidden="true" className="mt-3 flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.2em] text-acero uppercase">
            <span className="h-3 w-px bg-acero" />
            <span className="h-px flex-1 bg-acero/50" />
            Diseño · Ingeniería · Obra
            <span className="h-px flex-1 bg-acero/50" />
            <span className="h-3 w-px bg-acero" />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden bg-ambar px-6 py-5 text-carbon md:block lg:-left-10">
            <p className="font-heading text-4xl font-extrabold [font-stretch:78%]">15+</p>
            <p className="text-sm font-semibold">años en Sonora</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
