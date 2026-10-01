import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Smile } from "lucide-react";
import Stat from "@/components/Stat";
import ValueCard from "@/components/ValueCard";

export default function TestPage() {
  return (
    <>
      {/* <Navbar /> */}
      {/* Page heading */}
      {/* Colors */}
      <section>
        <h1 className="h1">Design System Test</h1>

        <p className="body">
          This page is testing our colors, typography, spacing, and border
          radius.
        </p>

        <h2 className="h2">Colors</h2>

        <div className="grid gap-default md:grid-cols-4">
          <div className="rounded bg-primary p-default">Primary</div>

          <div className="rounded bg-secondary p-default">Secondary</div>

          <div className="rounded bg-accent p-default">Accent</div>

          <div className="rounded bg-tertiary p-default text-white">
            Tertiary
          </div>
        </div>
      </section>
      {/* Typography */}
      <section>
        <h2 className="h2">Typography</h2>

        <div className="space-y-default">
          <h1 className="hero">Hero</h1>

          <h1 className="h1">Heading 1</h1>

          <h2 className="h2">Heading 2</h2>

          <h3 className="h3">Heading 3</h3>

          <h4 className="h4">Heading 4</h4>

          <p className="body-lg">This is large body text.</p>

          <p className="body">
            This is regular body text. It should be comfortable to read across
            different screen sizes.
          </p>

          <p className="small">This is small text.</p>
        </div>
      </section>

      <section>
        <div className="gap-default">
          <h1 className="underline">Hello</h1>
          <p>
            This is small textThis is small textThis is small textThis is small
            text This is small text
          </p>
        </div>
        <ServiceCard
          title="service title"
          desc="Tailored coaching to help individuals become confident, persuasive public speakers, capable of delivering impactful presentations."
          img="next.svg"
        />
        <TestimonialCard content="Tailored coaching to help individuals become confident, persuasive public speakers, capable of delivering impactful presentations." />
        <Button text="see our services" href="/" />
        <Button text="see our services" href="/" variant="secondary" />
        <Stat Icon={Smile} desc="Confident speakers" />
        <ValueCard variant={0} desc="Cultivate Strong Communication Skills" />
        <ValueCard variant={1} desc="Cultivate Strong Communication Skills" />
      </section>
      {/* <Footer /> */}
    </>
  );
}
