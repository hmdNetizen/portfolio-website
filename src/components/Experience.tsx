"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";

const companies = [
  { name: "Brand Central", id: "brand-central" },
  { name: "Code Inclusive", id: "code-inclusive" },
  { name: "Black Valley, UK", id: "black-valley" },
];

const experiences = [
  {
    id: "brand-central",
    role: "Software Developer",
    company: "Brand Central",
    period: "Jan 2022 - Present",
    accomplishments: [
      "Designed, implemented, and shipped the entire customer and admin facing websites.",
      "Managed the development, design and integration of backend and API",
      "Concurrently delivered an administration site for managing sales, customers, sales reps, delivery routes, etc",
      "Significantly enhanced website performance and traffic through SEO optimization and integration of analytics for robust performance metric gauge",
      "Developed a mobile application tailored for the company's sales representatives, eliminating the existing analogous paper-based system to a digital one.",
      "Created a mobile application for the customers, optimizing and simplifying the workflow from signup to order placement and to delivery.",
    ],
  },
  {
    id: "code-inclusive",
    role: "Frontend Developer",
    company: "Code Inclusive",
    period: "Jul 2021 - Jan 2022",
    accomplishments: [
      "Refactored the legacy codebase for a crypto and assets trading platform while live in production without downtime or incidents.",
      "Collaborated on the improvements to the security of users’ data on the trading platform by implementing robust authentication flow.",
      "Led a team of three frontend engineers after on-boarding two new members to the crypto & assets trading project.",
      "Collaborated on the development of the MVP of the admin dashboard for a health-tech project being the leader of the frontend team comprising three frontend developers.",
    ],
  },
  {
    id: "black-valley",
    role: "Software Developer Mentee",
    company: "Black Valley, UK",
    period: "Jul 2022 - Sept 2022",
    accomplishments: [
      "Coached, mentored and impacted by a seasoned Full Stack Engineer at Wise.",
      "Introduced to the concept of automated testing and its varying tools and frameworks.",
      "Implementation of automated testing for a side projects.",
      "Guided, directed and inspired to achieve excellence in the art of building software through adoption  of clean code methods and best coding practices for optimization and performance",
    ],
  },
];

export default function Experience() {
  const [currentCompany, setCurrentCompany] = useState("brand-central");

  const currentExperience = experiences.find(
    (exp) => exp.id === currentCompany
  );

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-4xl font-bold font-heading mb-12">
          Experience<span className="text-primary">.</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4">
            <div className="space-y-4 border-l-2 border-muted pr-4">
              {companies.map((company) => (
                <button
                  key={company.id}
                  className={`pl-4 py-2 w-full text-left font-medium hover:text-primary transition-colors ${
                    company.id === currentCompany
                      ? "text-primary border-l-2 border-primary -ml-[2px]"
                      : ""
                  }`}
                  onClick={() => setCurrentCompany(company.id)}
                >
                  {company.name}
                </button>
              ))}
            </div>
          </div>

          <div className="md:w-3/4">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="mb-2">
                  <h3 className="text-xl font-bold">
                    {currentExperience?.role}{" "}
                    <span className="text-primary">
                      @ {currentExperience?.company}
                    </span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {currentExperience?.period}
                  </p>
                </div>

                <ul
                  key={currentExperience?.id}
                  className={cn("space-y-3 mt-4 animate-fade-in")}
                >
                  {currentExperience?.accomplishments.map((accomplishment) => (
                    <li key={accomplishment} className="flex items-start gap-2">
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
                        className="text-primary flex-shrink-0 mt-1"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{accomplishment}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
