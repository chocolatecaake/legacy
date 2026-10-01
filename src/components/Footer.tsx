import Link from "next/link";
import { LucidePhone } from "lucide-react";
import { Mail } from "lucide-react";
import { links } from "@/constants/navigation";
import { ArrowUp } from "lucide-react";
export default function Footer() {
  return (
    <>
      <footer className="bg-black w-full text-white px-small sm:px-content">
        <div className="flex justify-between py-default px-small sm:px-default">
          <div className="flex flex-col sm:flex-row gap-section">
            <div className="flex flex-col space-y-default lg:min-w-55">
              <h4 className="!font-medium text-primary">Quick Contact</h4>
              <div className="flex flex-col space-y-small">
                <span className="flex body-large items-center">
                  <LucidePhone className="inline mr-small w-4" />
                  <div>
                    <p>+971 12 121 1231</p>
                  </div>
                </span>
                <span>
                  <Mail className="inline w-4 mr-small text-white" />
                  legacy@gmai.com
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-default lg:min-w-55">
              <h4 className="!font-medium text-primary">Quick Links</h4>
              <div className="flex flex-col space-y-small">
                {links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.path}
                    className="body-large capitalize hover:text-secondary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-fit h-fit p-3 bg-secondary rounded">
            <ArrowUp className="text-black" />
          </div>
        </div>
      </footer>
      <div className="w-full flex flex-col md:flex-row bg-primary p-1 justify-center items-center">
        <span className="small !font-semibold text-black">
          © 2026 All rights reserved.
        </span>
      </div>
    </>
  );
}
