"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/variants";

export default function CTA() {
  return (
    <section className="justify-center items-center !pb-0">
      <motion.h1
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.0 }}
        className="bg-background text-center"
      >
        Experience the transformative power of our communication coaching
        programs and witness the remarkable growth in your{" "}
        <div className="underline">child's confidence</div>
        and communication abilities.
      </motion.h1>
      <Image
        src="/assets/cta.webp"
        alt="graudationpic"
        width={700}
        height={500}
      />
    </section>
  );
}
