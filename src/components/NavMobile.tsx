"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Button from "./Button";

import Image from "next/image";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { links } from "@/constants/navigation";
import { usePathname } from "next/navigation";
import { Star } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
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
        threshold: 0,
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
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="cursor-pointer flex items-center justify-center text-3xl"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent className="bg-background border-none">
        <div>
          <SheetHeader>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <Link href="/">
              <div className="w-fit border border-white flex p-2 p-2 rounded-full items-center justify-center bg-black">
                <Star className="fill-white stroke-white" />
              </div>
            </Link>
            <SheetDescription className="sr-only">
              Navigation Menu
            </SheetDescription>
          </SheetHeader>
          <ul className="flex flex-col gap-10 p-8 justify-center text-left">
            {links.map((link) => {
              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
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
            <div onClick={() => setIsOpen(false)}>
              <Button text="Contact Us" variant="primary" href="#footer" />
            </div>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
