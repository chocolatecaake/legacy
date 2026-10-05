"use client";
import NavMobile from "./NavMobile";
import Button from "./Button";
import { Star } from "lucide-react";

import Link from "next/link";
import { useEffect } from "react";
import { links } from "@/constants/navigation";
import { useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    links.forEach((link) => {
      const section = document.querySelector(link.path);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="bg-black text-white fixed w-full sticky top-0 p-1 transition-all duration-200 z-50 shadow-lg border-white">
      <div className="min-h-[64px] flex justify-between items-center container mx-auto px-4 xl:px-0">
        <Link href="#home">
          <div className="flex p-2 p-2 rounded-full items-center justify-center bg-white">
            <Star className="fill-black stroke-white" />
          </div>
        </Link>
        <nav className={`hidden xl:block xl:flex items-center gap-12`}>
          <ul className="flex gap-12">
            {links.map((link) => {
              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={
                      activeSection === link.path.substring(1)
                        ? "font-semibold text-accent-2"
                        : "hover:text-secondary"
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden xl:block">
          <Button text="Contact us" variant="cta" href="#footer" />
        </div>
        <div className="xl:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
