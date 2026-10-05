import { LucideIcon } from "lucide-react";
import { Smile } from "lucide-react";

type StatProps = {
  fill: string;
  desc: string;
};

export default function Stat({ fill, desc }: StatProps) {
  return (
    <div className="flex items-center flex gap-small">
      <div className={`bg-${fill} p-1.5 rounded`}>
        <Smile stroke="white" />
      </div>
      <span className="text-tertiary !font-semibold capitalize">{desc}</span>
    </div>
  );
}
