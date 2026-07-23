"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
};

export function StaggerReveal({
  children,
  className = "",
  stagger = 0.12,
  delay = 0,
  amount = 0.15,
}: StaggerRevealProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount,
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 35,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}