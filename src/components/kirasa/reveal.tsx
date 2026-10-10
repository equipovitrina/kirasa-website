"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const easeOut = [0.23, 1, 0.32, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
};

/**
 * Entrada al hacer scroll (superficie de marketing, se dispara una vez).
 * Con movimiento reducido conserva el fundido y quita el desplazamiento.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;

  return (
    <Tag
      className={className}
      initial={
        reduce
          ? { opacity: 0 }
          : { opacity: 0, transform: "translateY(24px)" }
      }
      whileInView={
        reduce ? { opacity: 1 } : { opacity: 1, transform: "translateY(0px)" }
      }
      viewport={{ once: true, margin: "-80px" }}
      onViewportEnter={(entry) => entry?.target.setAttribute("data-visible", "")}
      transition={{ duration: reduce ? 0.4 : 0.6, ease: easeOut, delay }}
    >
      {children}
    </Tag>
  );
}
