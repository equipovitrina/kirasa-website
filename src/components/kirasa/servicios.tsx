import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

const servicios = [
  { nombre: "Diseño arquitectónico y estructural", nota: "Planos y cálculo estructural" },
  { nombre: "Presupuestos", nota: "Desglosados por partida" },
  { nombre: "Construcción de obra nueva", nota: "De la cimentación a los acabados" },
  { nombre: "Ampliaciones", nota: "Segundo nivel, cuartos, cocheras" },
  { nombre: "Remodelaciones", nota: "Casas, locales y oficinas" },
  { nombre: "Supervisión de obra", nota: "Calidad, costo y tiempos en sitio" },
  { nombre: "Instalaciones", nota: "Eléctricas, hidráulicas y sanitarias" },
  { nombre: "Acabados", nota: "Pisos, recubrimientos, plafones" },
  { nombre: "Impermeabilización", nota: "Azoteas y losas, antes de las lluvias" },
  { nombre: "Pintura", nota: "Interior y exterior" },
  { nombre: "Mantenimiento", nota: "Preventivo y correctivo" },
];

export function Servicios() {
  return (
    <section
      id="servicios"
      aria-labelledby="titulo-servicios"
      className="border-t border-border bg-card py-section"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionLabel numero="04">Servicios</SectionLabel>
            <h2
              id="titulo-servicios"
              className="mt-6 font-heading text-section font-extrabold uppercase [font-stretch:80%]"
            >
              Lo que hacemos
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">
              Del primer trazo a la última mano de pintura. Contratas una parte
              o la obra completa.
            </p>
          </div>
        </Reveal>

        <ol className="lg:col-span-8">
          {servicios.map((s, i) => (
            <Reveal
              as="li"
              key={s.nombre}
              delay={Math.min(i, 5) * 0.04}
              className="grid grid-cols-[3rem_1fr] items-baseline gap-x-4 border-t border-border py-5 last:border-b sm:grid-cols-[3.5rem_1fr_auto]"
            >
              <span className="font-heading text-sm font-semibold text-acero tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-xl font-bold uppercase [font-stretch:85%] md:text-2xl">
                {s.nombre}
              </h3>
              <p className="col-start-2 mt-1 text-sm text-muted-foreground sm:col-start-3 sm:mt-0 sm:text-right">
                {s.nota}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
