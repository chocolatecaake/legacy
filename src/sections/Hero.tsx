import { Smile } from "lucide-react";
import Stat from "@/components/Stat";
import { stat } from "fs";
import Image from "next/image";
import Button from "@/components/Button";

export default function Hero() {
  const stats = [
    "Expertise & Experience",
    "Interactive Learning",
    "Personalised Development",
  ];
  return (
    <section
      id="home"
      className="flex flex-col space-y-default items-center xl:!flex-row xl:justify-between"
    >
      <div className="bg-background space-y-content md:max-w-lg">
        <div className="space-y-default">
          <div className="hero">
            Master the Art of{" "}
            <span className="hero text-secondary">Communication</span> with
            Legacy
          </div>
          <h4>Empowering Students to Communicate with Confidence</h4>
        </div>
        <div className="flex flex-col md:flex-row gap-small">
          {stats.map((stat, idx) => (
            <Stat key={idx} Icon={Smile} desc={stat} />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-small">
          <Button
            text="See Our Services"
            variant="secondary"
            href="#services"
          />
          <Button text="Contact Us" href="#footer" />
        </div>
      </div>
      <Image src="/assets/pop2.png" alt="hero image" height={600} width={600} />
    </section>
  );
}
