import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
};

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = false,
  className,
}: MarqueeProps) {
  return (
    <div
      className={cn("group flex overflow-hidden [--duration:30s]", className)}
    >
      <div
        className={cn(
          "flex shrink-0 animate-marquee gap-8",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
