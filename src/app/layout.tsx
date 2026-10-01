import type { Metadata } from "next";
import { Outfit, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const outfit = Outfit({
  variable: "--font-primary",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Legacy Education",
  description:
    "Legacy education is an institute dedicated towards creating and nurturing confident public speakers and effective communicators",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        outfit.variable,
        spaceGrotesk.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
