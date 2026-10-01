import TestimonialCard from "@/components/TestimonialCard";
import { Marquee } from "@/components/ui/marquee";

export default function Testimonials() {
  return (
    <section className="bg-primary !px-0">
      <h1 className="text-center">hear from our parents</h1>
      <div className="space-y-default">
        <Marquee pauseOnHover className="[--duration:50s]">
          <TestimonialCard content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966." />
          <TestimonialCard content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966." />
          <TestimonialCard content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966." />
          <TestimonialCard content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966." />
          <TestimonialCard content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966." />
        </Marquee>
        <Marquee pauseOnHover reverse className="[--duration:50s]">
          <TestimonialCard content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966." />
          <TestimonialCard content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966." />
          <TestimonialCard content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966." />
          <TestimonialCard content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966." />
          <TestimonialCard content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966." />
        </Marquee>
      </div>
    </section>
  );
}
