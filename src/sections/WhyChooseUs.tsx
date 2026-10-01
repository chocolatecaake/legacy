import Image from "next/image";
import Stat from "@/components/Stat";
import { Smile } from "lucide-react";

export default function WhyUs() {
  const values = [
    "All-Inclusive Programs",
    "Enhanced Learning Resources",
    "Creative Expression",
  ];

  return (
    <section className="bg-white flex flex-col md:!flex-row md:!gap-section justify-center items-center md:!pl-0">
      <Image
        src="/assets/confidentSpeaker.webp"
        alt="girl sitting on a desk"
        width={400}
        height={400}
      />
      <div className="space-y-content">
        <div className="space-y-default">
          <h1>Crafting Confident communicators</h1>
          <div className="space-y-small">
            <p>
              Legacy offers professional coaching under the guidance of an
              accredited communication expert with over three decades of
              experience as a teacher and examiner of performing art
            </p>
            <p>
              We are a licensed skills development institute with years of
              experience presenting pupils for British board examinations in
              performing arts and a proven track record of producing high
              achievers and UAE toppers for these examinations.
            </p>
            <p>
              Our programs are designed to inspire creativity, promote social
              growth, and enhance communication skills, ensuring every student
              becomes an effective and confident speaker.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-white gap-default">
          {values.map((value, idx) => (
            <Stat key={idx} Icon={Smile} desc={value} />
          ))}
        </div>
      </div>
    </section>
  );
}
