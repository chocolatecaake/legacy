import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/constants/testimonials";
import Image from "next/image";

const clients = ["adnoc", "cnooc", "damac", "petrofac", "taqa", "nbtc"];

type TestimonialProps = {
  content: string;
};

export default function TestimonialCard({ content }: TestimonialProps) {
  return (
    <figure
      className={cn(
        "space-y-small w-88 flex h-full flex-col justify-between p-default rounded border-[1.5px] border-primary bg-background hover:border-black",
      )}
    >
      {/* Stars */}
      <div className="flex gap-1" aria-label={`5 out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-6 w-6 fill-secondary stroke-none" />
        ))}
      </div>

      {/* testimonial */}
      <p className="flex-1 text-foreground leading-relaxed">{content}</p>
    </figure>
  );
}
