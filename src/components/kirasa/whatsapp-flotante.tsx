"use client";

import { motion, useReducedMotion } from "motion/react";
import { linkWhatsApp } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

export function WhatsAppFlotante() {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={linkWhatsApp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp (se abre en otra pestaña)"
      initial={reduce ? { opacity: 0 } : { opacity: 0, transform: "scale(0.95) translateY(8px)" }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, transform: "scale(1) translateY(0px)" }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1], delay: 1 }}
      className="fixed right-4 bottom-4 z-30 md:right-6 md:bottom-6"
    >
      <span className="btn btn-ambar size-14 !p-0 shadow-[0_8px_24px_rgb(21_25_28/0.35)]">
        <WhatsAppIcon className="size-7" />
      </span>
    </motion.a>
  );
}
