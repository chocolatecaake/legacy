import ValueCard from "@/components/ValueCard";
import { valueList } from "@/constants/values";
import Image from "next/image";

export function Values() {
  return (
    <section className="bg-white">
      <div className="flex flex-col md:flex-row gap-default">
        {valueList.map((value, idx) => (
          <ValueCard key={idx} variant={idx} desc={value} />
        ))}
      </div>
    </section>
  );
}
