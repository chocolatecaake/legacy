import { serviceList } from "@/constants/services";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <section>
      <div className="flex flex-col bg-background space-y-default">
        <h1>Our Services</h1>
        <p className="body-lg max-w-md">
          Our coaching programs are designed to provide a comprehensive learning
          experience that encompasses public speaking, effective communication
          skills, and interpersonal development.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-[48px] sm:grid-cols-2 xl:grid-cols-6">
        {serviceList.map((service, idx) => (
          <div
            key={idx}
            className={`xl:col-span-2 ${idx === 3 ? "xl:col-start-2" : ""}`}
          >
            <ServiceCard
              img={service.img}
              title={service.title}
              desc={service.desc}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
