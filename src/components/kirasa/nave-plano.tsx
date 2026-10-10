/**
 * Alzado técnico de una nave industrial con armaduras.
 * Ocupa el lugar de la foto de Industrial hasta tener una fotografía real.
 */
export function NavePlano({ className }: { className?: string }) {
  const columnas = [70, 170, 270, 370, 470];
  // Diagonales de la armadura entre cuerda superior e inferior
  const diagonales = Array.from({ length: 10 }, (_, i) => 70 + i * 40);

  return (
    <svg
      viewBox="0 0 540 400"
      className={className}
      role="img"
      aria-label="Dibujo técnico de una nave industrial con estructura de acero y armaduras de techo"
    >
      <defs>
        <pattern id="reticula" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#c9cdd0" strokeOpacity="0.08" />
        </pattern>
        <pattern id="terreno" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke="#c9cdd0" strokeOpacity="0.35" />
        </pattern>
        <marker id="flecha" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0L8 4L0 8" fill="none" stroke="#c9cdd0" />
        </marker>
      </defs>

      <rect width="540" height="400" fill="#22292d" />
      <rect width="540" height="400" fill="url(#reticula)" />

      <g fill="none" stroke="#f5ab14" strokeWidth="2" strokeLinejoin="round">
        {/* Muros y cubierta a dos aguas */}
        <path d="M70 300V160L270 95L470 160V300" />
        {/* Cuerda inferior de la armadura */}
        <path d="M70 160H470" strokeWidth="1.5" />
        {/* Columnas */}
        {columnas.map((x) => (
          <line key={x} x1={x} y1={x === 270 ? 160 : 160} x2={x} y2="300" strokeWidth="1.5" strokeOpacity="0.7" />
        ))}
      </g>

      {/* Celosía de la armadura */}
      <g stroke="#f5ab14" strokeOpacity="0.55" strokeWidth="1">
        {diagonales.map((x, i) => {
          const yTop = (px: number) => (px <= 270 ? 160 - ((px - 70) / 200) * 65 : 95 + ((px - 270) / 200) * 65);
          const x2 = x + 40;
          return i % 2 === 0 ? (
            <line key={x} x1={x} y1="160" x2={x2} y2={yTop(x2)} />
          ) : (
            <line key={x} x1={x} y1={yTop(x)} x2={x2} y2="160" />
          );
        })}
        {diagonales.map((x) => {
          const yTop = x <= 270 ? 160 - ((x - 70) / 200) * 65 : 95 + ((x - 270) / 200) * 65;
          return <line key={`v${x}`} x1={x} y1={yTop} x2={x} y2="160" />;
        })}
      </g>

      {/* Portón y accesos */}
      <g fill="none" stroke="#c9cdd0" strokeOpacity="0.6">
        <rect x="200" y="210" width="140" height="90" />
        {[222, 244, 266, 288, 310].map((y) => (
          <line key={y} x1="200" y1={y} x2="340" y2={y} strokeOpacity="0.25" />
        ))}
        <rect x="100" y="250" width="34" height="50" />
        <rect x="406" y="250" width="34" height="50" />
      </g>

      {/* Terreno */}
      <rect x="40" y="300" width="460" height="14" fill="url(#terreno)" />
      <line x1="40" y1="300" x2="500" y2="300" stroke="#c9cdd0" strokeWidth="1.5" />

      {/* Cotas */}
      <g stroke="#c9cdd0" strokeWidth="1" fontFamily="var(--font-archivo), sans-serif" fontSize="12" fill="#c9cdd0" letterSpacing="1">
        <line x1="70" y1="340" x2="470" y2="340" markerStart="url(#flecha)" markerEnd="url(#flecha)" />
        <line x1="70" y1="318" x2="70" y2="348" strokeOpacity="0.5" />
        <line x1="470" y1="318" x2="470" y2="348" strokeOpacity="0.5" />
        <text x="270" y="362" textAnchor="middle" stroke="none">24.00 m</text>

        <line x1="505" y1="95" x2="505" y2="300" markerStart="url(#flecha)" markerEnd="url(#flecha)" />
        <line x1="275" y1="95" x2="512" y2="95" strokeOpacity="0.3" strokeDasharray="3 4" />
        <text x="0" y="0" transform="translate(522 200) rotate(90)" textAnchor="middle" stroke="none">10.50 m</text>
      </g>

      <text x="40" y="44" fill="#f5ab14" fontFamily="var(--font-archivo), sans-serif" fontSize="11" fontWeight="700" letterSpacing="3">
        ALZADO FRONTAL · NAVE TIPO
      </text>
      <text x="40" y="62" fill="#c9cdd0" fillOpacity="0.7" fontFamily="var(--font-archivo), sans-serif" fontSize="10" letterSpacing="2">
        ESC. 1:200
      </text>
    </svg>
  );
}
