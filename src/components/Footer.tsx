"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://www.github.com/hmdnetizen",
    icon: (
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
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    name: "Stack Overflow",
    href: "https://stackoverflow.com/users/14535636/hamed-jimoh",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.24 19.399V14.595H18.84V21H4.38098V14.595H5.97898V19.399H17.24ZM7.58198 17.8H15.637V16.196H7.58198V17.8ZM7.77698 14.16L15.636 15.801L15.976 14.249L8.11498 12.607L7.77698 14.16ZM8.79498 10.366L16.076 13.764L16.754 12.301L9.47298 8.90202L8.79498 10.356V10.366ZM10.832 6.77702L16.998 11.919L18.016 10.703L11.854 5.56302L10.838 6.77602L10.832 6.77702ZM14.814 2.99902L13.503 3.96802L18.306 10.422L19.619 9.45102L14.812 2.99902H14.814V2.99902Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hamed-jimoh-166b58189/",
    icon: (
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },

  {
    name: "X",
    href: "https://www.x.com/hmdnetizen",
    icon: (
      <svg
        version="1.1"
        id="svg5"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="2"
        // fill="none"
        width="20"
        height="20"
        viewBox="0 0 1668.56 1221.19"
      >
        <g id="layer1" transform="translate(52.390088,-25.058597)">
          <path
            id="path1009"
            d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
          />
        </g>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="py-16 mt-24">
      <div className="container">
        <div className="bg-background rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-heading font-semibold mb-4">
            Interested in working together?
          </h3>
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

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 order-2 md:order-1">
            <nav className="flex space-x-4">
              <Link
                href="/"
                className="text-sm hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-sm hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="text-sm hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex space-x-3 order-1 md:order-2">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-white transition-colors"
                aria-label={link.name}
                title={link.name}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground flex justify-center items-center gap-1">
          <span>©{new Date().getFullYear()} All Rights Reserved.</span>
          <div className="flex items-center space-x-1">
            <span>Designed by </span>
            <a
              href="https://dribbble.com/shots/23212629-Purplefolio-Framer-Portfolio-Website-For-Web-Developers"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luca Da Corte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
