"use client";
import Image from "next/image";
import NavMobile from "./NavMobile";
import Button from "./Button";
import { Star } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "@/constants/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header
      className={`bg-black text-white fixed w-full sticky top-0 p-1 transition-all duration-200 z-50 shadow-lg border-white"}`}
    >
      <div className="min-h-[64px] flex justify-between items-center container mx-auto px-4 xl:px-0">
        <Link href="/">
          <div className="flex p-2 p-2 rounded-full items-center justify-center bg-white">
            <Star className="fill-black stroke-white" />
          </div>
        </Link>
        <nav className={`hidden xl:block xl:flex items-center gap-12`}>
          <ul className="flex gap-12">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className={`font-semibold transition-colors ${
                    pathname === link.path
                      ? "text-accent-2 hover:text-white"
                      : "hover:text-secondary"
                  }`}
                >
                  <Link href={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden xl:block">
          <Button text="Contact us" variant="cta" href="/contact" />
        </div>
        <div className="xl:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
