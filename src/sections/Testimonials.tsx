import TestimonialCard from "@/components/TestimonialCard";
import { Marquee } from "@/components/ui/marquee";

export default function Testimonials() {
  const testimonials = [
    "Being a student here really raised my confidence levels and ability to speak in public settings, in both social and professional environments.",
    "As a parent I am extremely happy with the learning environment provided for my child.",
    "We are very happy with the progress of our child in this institution, my childs confidence and communication skills has drastically improved.",
    "Being a student here really raised my confidence levels and ability to speak in public settings, in both social and professional environments.",
    "As a parent I am extremely happy with the learning environment provided for my child.",
  ];
  return (
    <section className="bg-primary !px-0">
      <h1 className="text-center">hear from our parents</h1>
      <div className="space-y-default">
        <Marquee pauseOnHover className="[--duration:50s]">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} content={testimonial} />
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse className="[--duration:50s]">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} content={testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
