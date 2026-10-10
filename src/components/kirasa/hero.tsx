import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { linkWhatsApp } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

// La entrada del inicio va en CSS (globals.css: .entra, .entra-linea, .entra-foto)
// para que corra desde el primer pintado, sin esperar a que cargue JavaScript.
const paso = (i: number) => ({ "--i": i }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="titulo-inicio"
      className="relative isolate flex flex-col overflow-hidden bg-carbon text-concreto md:min-h-[calc(100svh-5.5rem)]"
    >
      <div className="entra-foto absolute inset-0 -z-10">
        <Image
          src="/images/hero-obra.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(21_25_28/0.9)_0%,rgb(21_25_28/0.62)_40%,rgb(21_25_28/0.05)_75%),linear-gradient(0deg,rgb(21_25_28/0.85)_0%,transparent_35%)]"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-12 pb-10 md:px-8 md:pt-24 md:pb-12">
        <p
          style={paso(0)}
          className="entra flex items-center gap-3 font-heading text-eyebrow font-semibold tracking-[0.2em] text-niebla uppercase"
        >
          <span aria-hidden="true" className="h-0.5 w-8 bg-ambar" />
          Diseño · Construcción · Remodelación
        </p>

        <h1
          id="titulo-inicio"
          className="mt-6 font-heading text-display font-extrabold uppercase [font-stretch:78%]"
        >
          <span style={paso(1)} className="entra-linea block">
            Construyendo
          </span>{" "}
          <span style={paso(2)} className="entra-linea block text-ambar">
            ideas reales
          </span>
        </h1>

        <p
          style={paso(3)}
          className="entra mt-8 max-w-xl text-lead text-concreto/90"
        >
          Somos una constructora familiar de Navojoa. Llevamos más de quince
          años levantando casas, locales y naves en Sonora, desde el primer
          plano hasta la entrega.
        </p>

        <div style={paso(4)} className="entra mt-10 flex flex-wrap gap-3">
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ambar"
          >
            <WhatsAppIcon className="size-5" />
            Cotiza tu proyecto
          </a>
          <a href="#nosotros" className="btn btn-linea-clara">
            Conoce KIRASA
            <ArrowRight className="flecha size-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div
        style={paso(6)}
        className="entra mx-auto flex w-full max-w-7xl justify-start px-5 pb-8 md:px-8"
      >
        <p className="flex items-center gap-3 border-l-2 border-ambar pl-4 text-sm leading-snug text-concreto/85">
          <MapPin className="size-5 shrink-0 text-ambar" aria-hidden="true" />
          <span>
            <strong className="font-semibold text-concreto">Navojoa, Sonora.</strong>
            <br />
            Obras en todo el estado.
          </span>
        </p>
      </div>
    </section>
  );
}
