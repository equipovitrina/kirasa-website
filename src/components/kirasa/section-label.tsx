type SectionLabelProps = {
  numero: string;
  children: React.ReactNode;
  tono?: "claro" | "oscuro";
};

/** Rótulo de sección con numeración de plano: "01 — Sobre KIRASA". */
export function SectionLabel({ numero, children, tono = "claro" }: SectionLabelProps) {
  return (
    <p
      className={`flex items-center gap-3 font-heading text-eyebrow font-semibold tracking-[0.2em] uppercase ${
        tono === "oscuro" ? "text-niebla" : "text-acero"
      }`}
    >
      <span className={tono === "oscuro" ? "text-ambar" : "text-carbon"}>
        {numero}
      </span>
      <span aria-hidden="true" className="h-0.5 w-8 bg-ambar" />
      {children}
    </p>
  );
}
