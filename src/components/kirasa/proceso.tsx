import { ClipboardList, DraftingCompass, HardHat, KeyRound, Shovel } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

const etapas = [
  {
    nombre: "Diseño",
    texto: "Planos arquitectónicos y estructurales hechos a la medida del terreno y del presupuesto.",
    Icono: DraftingCompass,
  },
  {
    nombre: "Planeación",
    texto: "Presupuesto detallado, calendario de obra y compra de materiales antes de mover tierra.",
    Icono: ClipboardList,
  },
  {
    nombre: "Ejecución",
    texto: "Cimentación, estructura, instalaciones y acabados, con personal calificado y maquinaria.",
    Icono: Shovel,
  },
  {
    nombre: "Supervisión",
    texto: "Seguimiento en sitio para cuidar calidad, costo y tiempos. Sin sorpresas al final.",
    Icono: HardHat,
  },
  {
    nombre: "Entrega",
    texto: "Revisamos la obra contigo, punto por punto, y la entregamos lista para usarse.",
    Icono: KeyRound,
  },
];

export function Proceso() {
  return (
    <section
      id="proceso"
      aria-labelledby="titulo-proceso"
      className="plano bg-carbon py-section text-concreto"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel numero="02" tono="oscuro">
              Nuestro proceso
            </SectionLabel>
            <h2
              id="titulo-proceso"
              className="mt-6 font-heading text-section font-extrabold uppercase [font-stretch:80%]"
            >
              De la idea <span className="text-ambar">a la obra</span>
            </h2>
          </div>
          <p className="max-w-sm text-niebla md:text-right">
            Cinco etapas, un solo responsable. Sabes en qué punto va tu obra
            en todo momento.
          </p>
        </Reveal>

        <ol className="mt-12 grid md:mt-16 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {etapas.map(({ nombre, texto, Icono }, i) => (
            <Reveal
              as="li"
              key={nombre}
              delay={i * 0.06}
              className="group relative grid grid-cols-[3.25rem_1fr] gap-x-3 bg-carbon px-5 pt-6 pb-5 sm:flex sm:flex-col sm:p-6 sm:pt-8 lg:p-7 lg:pt-10"
            >
              {/* La barra se dibuja de izquierda a derecha, etapa tras etapa: avance de obra */}
              <span
                aria-hidden="true"
                style={{ "--i": i } as React.CSSProperties}
                className="barra-avance absolute inset-x-0 top-0 h-1 bg-ambar"
              />
              <div className="row-span-2 sm:flex sm:items-start sm:justify-between">
                <span className="font-heading text-4xl leading-none font-extrabold text-ambar tabular-nums sm:text-5xl [font-stretch:78%]">
                  0{i + 1}
                </span>
                <Icono className="hidden size-8 text-niebla sm:block" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl sm:mt-8 sm:text-2xl font-bold uppercase [font-stretch:85%]">
                {nombre}
              </h3>
              <p className="mt-1.5 text-[0.9375rem] sm:mt-3 leading-relaxed text-niebla">{texto}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
