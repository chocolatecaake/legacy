import ValueCard from "@/components/ValueCard";
import { valueList } from "@/constants/values";
import Image from "next/image";

export function Values() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 gap-default sm:grid-cols-2 xl:grid-cols-6">
        {valueList.map((value, idx) => (
          <ValueCard key={idx} variant={idx} desc={value} />
        ))}
      </div>
    </section>
  );
}
