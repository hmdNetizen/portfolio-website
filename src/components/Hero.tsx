"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2">
            <p className="font-heading text-lg mb-2">Hey, I&apos;m Hamed</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="text-primary font-heading">Front</span>
              <span className="font-heading">end</span>
              <br />
              <span className="font-heading">Developer</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              A frontend developer from Lagos, Nigeria. I spend a lot of my time
              learning and building stuff for the web through carefully crafted
              code and user-friendly design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-primary text-white font-medium hover:bg-primary/90"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
              <Button asChild variant="outline" className="font-medium">
                <Link href="/projects">Browse Projects</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="flex items-center justify-center w-[350px] h-[350px] border border-primary p-4 rounded-full md:w-[450px] md:h-[450px]">
              <div className="relative p-2 w-[300px] h-[300px] rounded-full md:w-[400px] md:h-[400px]">
                <Image
                  src="/headshot-2.jpg"
                  alt="Luca - Frontend Developer"
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 768px) 300px, 400px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
