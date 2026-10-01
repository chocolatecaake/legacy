"use client";
import Image from "next/image";

type ServiceProps = {
  img: string;
  title: string;
  desc: string;
};

export default function ServiceCard({ img, title, desc }: ServiceProps) {
  return (
    <div className="card bg-background">
      <div className="card-img bg-white">
        <Image src={img} alt={title} fill className="object-contain p-2 pb-0" />
      </div>
      <div className="flex flex-col">
        <span className="body-large capitalize !font-semibold mb-2">
          {title}
        </span>
        <p className={`text-tertiary`}>{desc}</p>
      </div>
    </div>
  );
}
