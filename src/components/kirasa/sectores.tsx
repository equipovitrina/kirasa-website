import Image from "next/image";
import { Factory, House, Store } from "lucide-react";
import { NavePlano } from "./nave-plano";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function Sectores() {
  return (
    <section
      id="sectores"
      aria-labelledby="titulo-sectores"
      className="py-section"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel numero="03">Nuestros sectores</SectionLabel>
            <h2
              id="titulo-sectores"
              className="mt-6 font-heading text-section font-extrabold uppercase [font-stretch:80%]"
            >
              Casas, comercios y naves
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground lg:col-span-5">
            Cada tipo de obra tiene sus propias exigencias. Una casa pide
            detalle, un local pide velocidad y una nave pide estructura.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:grid-rows-2">
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <Sector
              numero="01"
              titulo="Residencial"
              Icono={House}
              texto="Casas nuevas, ampliaciones y remodelaciones. Obra para familias que quieren saber en qué se va cada peso."
              media={
                <Image
                  src="/images/residencial.webp"
                  alt="Casa de dos niveles en obra gris, con albañiles trabajando en la fachada"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              }
              alto
            />
          </Reveal>
          <Reveal delay={0.06} className="lg:col-span-5">
            <Sector
              numero="02"
              titulo="Comercial"
              Icono={Store}
              texto="Locales, oficinas y tiendas. Cada semana de retraso es venta perdida, y así lo planeamos."
              media={
                <Image
                  src="/images/comercial.webp"
                  alt="Local comercial en construcción con fachada de concreto y cancelería"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              }
            />
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-5">
            <Sector
              numero="03"
              titulo="Industrial"
              Icono={Factory}
              texto="Naves, bodegas, cimentaciones e infraestructura. Estructuras que aguantan carga, clima y operación diaria."
              media={<NavePlano className="absolute inset-0 size-full bg-grafito p-2" />}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type SectorProps = {
  numero: string;
  titulo: string;
  texto: string;
  Icono: React.ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;
  media: React.ReactNode;
  alto?: boolean;
};

function Sector({ numero, titulo, texto, Icono, media, alto }: SectorProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden bg-carbon text-concreto">
      <div className={`relative overflow-hidden ${alto ? "aspect-[4/3] lg:aspect-auto lg:flex-1" : "aspect-[16/9]"}`}>
        <div className="absolute inset-0 transition-transform duration-300 ease-[var(--ease-out)] group-hover:scale-[1.03]">
          {media}
        </div>
      </div>
      <div className="flex items-start gap-4 border-t-4 border-ambar p-6 md:p-7">
        <Icono className="mt-1 size-7 shrink-0 text-ambar" strokeWidth={1.5} aria-hidden />
        <div>
          <h3 className="flex items-baseline gap-3 font-heading text-2xl font-bold uppercase [font-stretch:85%] md:text-3xl">
            {titulo}
            <span className="text-sm font-semibold text-niebla tabular-nums">{numero}</span>
          </h3>
          <p className="mt-2 max-w-[48ch] leading-relaxed text-niebla">{texto}</p>
        </div>
      </div>
    </article>
  );
}
