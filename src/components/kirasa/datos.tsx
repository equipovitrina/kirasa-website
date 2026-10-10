import { Reveal } from "./reveal";

const datos = [
  { cifra: "15+", texto: "años construyendo en Sonora" },
  { cifra: "3", texto: "sectores: residencial, comercial e industrial" },
  { cifra: "5", texto: "etapas, del diseño a la entrega de llaves" },
  { cifra: "1", texto: "mismo equipo responde por toda la obra" },
];

export function Datos() {
  return (
    <section aria-label="KIRASA en cifras" className="bg-grafito text-concreto">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 px-5 md:px-8 lg:grid-cols-4">
        {datos.map((d, i) => (
          <Reveal
            as="li"
            key={d.texto}
            delay={i * 0.06}
            className="flex flex-col gap-2 border-white/10 py-8 pr-4 max-lg:[&:nth-child(-n+2)]:border-b lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0"
          >
            <span className="font-heading text-5xl font-extrabold text-ambar [font-stretch:78%] md:text-6xl">
              {d.cifra}
            </span>
            <span className="max-w-[16ch] text-sm leading-snug text-niebla md:text-base">
              {d.texto}
            </span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
