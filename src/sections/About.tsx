"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/constants/variants";

export function About() {
  return (
    <section className="bg-primary" id="vision">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-small">
        <motion.h1
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1"
        >
          <div className="underline">Unlock Your Potential</div> with
          Communication Coaching
        </motion.h1>
        <motion.h4
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="!font-medium flex-2"
        >
          At Legacy, we are dedicated to empowering youngsters to excel in
          public speaking and communication, fostering social development,
          creativity, and self-expression. Our goal is to cultivate articulate
          speakers who can confidently engage with any audience.
        </motion.h4>
      </div>
    </section>
  );
}
