export const contacto = {
  whatsapp: "526441710996",
  whatsappVisible: "644 171 0996",
  correo: "contacto@kirasa.com.mx",
  calle: "Av. Ignacio López Rayón 1208",
  colonia: "Col. Constitución",
  ciudad: "Navojoa, Sonora",
};

export const direccionCompleta = `${contacto.calle}, ${contacto.colonia}, ${contacto.ciudad}`;

export function linkWhatsApp(
  mensaje = "Hola, KIRASA. Me gustaría cotizar un proyecto."
) {
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export const mapaEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  direccionCompleta
)}&z=16&output=embed`;

export const mapaLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  direccionCompleta
)}`;

export const navegacion = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];
