"use client";

import { motion } from "framer-motion";
import { cardVariants } from "@/constants/variants";
import ValueCard from "@/components/ValueCard";
import { valueList } from "@/constants/values";

export function Values() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 gap-default sm:grid-cols-2 xl:grid-cols-5">
        {valueList.map((value, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={idx}
          >
            <ValueCard key={idx} variant={idx} desc={value} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
