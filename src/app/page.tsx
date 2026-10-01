import { About } from "@/sections/About";
import TestPage from "./tester/page";
import Services from "@/sections/Services";
import { Values } from "@/sections/Values";
import CTA from "@/sections/CTA";
import WhyUs from "@/sections/WhyChooseUs";
import Testimonials from "@/sections/Testimonials";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Values />
      <Services />
      <WhyUs />
      <Testimonials />
      <CTA />
      {/* <TestPage /> */}
    </>
  );
}
