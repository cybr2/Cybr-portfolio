'use client'
import { useMousePosition } from "@/lib/hooks";
import Link from "next/link";

import {
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardSubTitle,
  CardFooter
} from '@/components/ui/card'
import Hero from "@/components/section/Hero";
import Radial from "@/components/Radial";
import About from "@/components/section/About";
import Experience from "@/components/section/Experience";
import Projects from "@/components/section/Projects";

export default function Home() {
  const { x, y } = useMousePosition();

  // Calculate the position of the radial gradient based on the cursor position
  const gradientPosition = `${x}px ${y}px`;

  return (
    <>
      {/* Background gradient radial */}
      <Radial gradientPosition={gradientPosition} />
      {/* Content */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <a href="#content" className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0">Skip to Content</a>
        <div className="lg:min-h-screen lg:flex lg:justify-between lg:gap-4">
          <Hero />
          <main className="pt-24 lg:w-1/2 lg:py-24" id="content">
            <About />
            <Experience />
            <Projects />
          </main>
        </div>
      </div>
    </>
  );
}
