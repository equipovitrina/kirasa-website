"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { linkWhatsApp, navegacion, contacto } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-concreto/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:h-22 md:px-8">
        <a href="#inicio" className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ambar-hondo">
          <Image
            src="/brand/kirasa-logo-positivo.svg"
            alt="KIRASA Constructores"
            width={161}
            height={88}
            priority
            className="h-13 w-auto md:h-[4.25rem]"
          />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navegacion.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative py-2 font-heading text-[0.8125rem] font-semibold tracking-[0.12em] text-acero uppercase transition-colors duration-150 hover:text-carbon"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-ambar transition-[clip-path] duration-200 ease-[var(--ease-out)] [clip-path:inset(0_100%_0_0)] group-hover:[clip-path:inset(0)] group-focus-visible:[clip-path:inset(0)]"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={linkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ambar hidden !min-h-11 !px-4 !text-[0.8125rem] sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Cotiza tu proyecto
          </a>

          <Sheet>
            <SheetTrigger
              aria-label="Abrir menú"
              className="btn inline-flex size-11 !min-h-11 !p-0 text-carbon lg:hidden"
            >
              <Menu className="size-6" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm border-l-0 bg-carbon p-0 text-concreto">
              <SheetTitle className="sr-only">Menú</SheetTitle>
              <SheetDescription className="sr-only">
                Navegación del sitio de KIRASA Constructores
              </SheetDescription>
              <nav aria-label="Móvil" className="flex h-full flex-col px-6 pt-20 pb-8">
                <ul className="flex flex-col">
                  {navegacion.map((item, i) => (
                    <li key={item.href} className="border-b border-white/10">
                      <SheetClose asChild>
                        <a
                          href={item.href}
                          className="flex items-baseline gap-4 py-4 font-heading text-3xl font-bold uppercase [font-stretch:80%]"
                        >
                          <span className="text-sm font-semibold text-ambar tabular-nums">
                            0{i + 1}
                          </span>
                          {item.label}
                        </a>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto space-y-4">
                  <a
                    href={linkWhatsApp()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ambar w-full"
                  >
                    <WhatsAppIcon className="size-5" />
                    Cotiza tu proyecto
                  </a>
                  <p className="text-sm text-niebla">
                    WhatsApp {contacto.whatsappVisible}
                    <br />
                    {contacto.correo}
                  </p>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
