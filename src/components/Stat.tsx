import { LucideIcon } from "lucide-react";

type StatProps = {
  Icon: LucideIcon;
  desc: string;
};

export default function Stat({ Icon, desc }: StatProps) {
  return (
    <div className="flex items-center flex gap-small">
      <div className="bg-black p-1.5 rounded">
        <Icon stroke="white" />
      </div>
      <span className="text-tertiary !font-semibold capitalize">{desc}</span>
    </div>
  );
}
