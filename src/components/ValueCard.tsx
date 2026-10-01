import { Lightbulb } from "lucide-react";
import Image from "next/image";

type ValueProps = {
  variant: number;
  desc: string;
};

export default function ValueCard({ variant, desc }: ValueProps) {
  return (
    <div className="flex flex-col items-center gap-small">
      <div>
        <Image
          src={
            variant % 2 === 0
              ? "/assets/pinkBulb.webp"
              : "/assets/yellowBulb.webp"
          }
          alt="..."
          width={40}
          height={40}
        />
      </div>
      <span className="body-lg text-center">{desc}</span>
    </div>
  );
}
