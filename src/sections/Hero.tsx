"use client";

import Stat from "@/components/Stat";
import Image from "next/image";
import Button from "@/components/Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/constants/variants";

export default function Hero() {
  const stats = [
    { desc: "Expertise & Experience", fill: "secondary" },
    { desc: "Interactive Learning", fill: "accent" },
    { desc: "Personalised Development", fill: "primary" },
  ];
  return (
    <section
      id="home"
      className="flex flex-col space-y-default items-center xl:!flex-row xl:justify-between"
    >
      <div className="bg-background space-y-content md:max-w-lg">
        <div className="space-y-default">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.0 }}
            className="hero"
          >
            Master the Art of Communication with Legacy
          </motion.div>
          <motion.h4
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.0 }}
            className="text-tertiary"
          >
            Empowering Students to Communicate with Confidence
          </motion.h4>
        </div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.0 }}
          className="flex flex-col md:flex-row gap-small"
        >
          {stats.map((stat, idx) => (
            <Stat key={idx} fill={stat.fill} desc={stat.desc} />
          ))}
        </motion.div>
        <div className="flex flex-col sm:flex-row gap-small">
          <Button text="See Our Services" variant="secondary" href="#service" />
          <Button text="Contact Us" href="#footer" />
        </div>
      </div>
      <Image
        src="/assets/heroimg.png"
        alt="hero image"
        height={600}
        width={600}
      />
    </section>
  );
}
