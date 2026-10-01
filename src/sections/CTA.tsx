import Image from "next/image";

export default function CTA() {
  return (
    <section className="justify-center items-center !pb-0">
      <h1 className="bg-background text-center">
        Experience the transformative power of our communication coaching
        programs and witness the remarkable growth in your{" "}
        <div className="underline">child's confidence</div>
        and communication abilities.
      </h1>
      <Image
        src="/assets/cta.webp"
        alt="graudationpic"
        width={700}
        height={500}
      />
    </section>
  );
}
