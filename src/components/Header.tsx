"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="py-6">
      <div className="container flex justify-between items-center">
        <Link href="/" className="font-heading font-bold text-lg">
          <h5 className="text-center font-pacifico text-2xl">
            <span className="text-primary">&lt;</span>Hamed J.{" "}
            <span className="text-primary">/&gt;</span>
          </h5>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "font-medium hover:text-primary transition-colors",
                pathname === item.href ? "text-primary" : "text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-primary transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m3 16 4 4 4-4" />
            <path d="M7 20V4" />
            <path d="M11 4h10" />
            <path d="M11 8h7" />
            <path d="M11 12h4" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
