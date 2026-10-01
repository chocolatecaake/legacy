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

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className={`font-semibold transition-colors ${
                    pathname === link.path
                      ? "text-secondary"
                      : "hover:text-secondary"
                  }`}
                >
                  <Link href={link.path} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <div onClick={() => setIsOpen(false)}>
              <Button text="Contact Us" variant="primary" href="/contact" />
            </div>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
