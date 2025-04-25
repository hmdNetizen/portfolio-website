"use client";

const skillCategories = [
  {
    id: "web-design",
    title: "Web Design",
    skills: ["Responsive Design", "Accessibility Design", "User Research"],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["JavaScript", "TypeScript", "ReactJS / NextJS", "React Native"],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["NodeJs", "MondoDB", "ExpressJS", "Vercel"],
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    skills: [
      "Effective communication",
      "Collaboration",
      "Commitment",
      "Leadership",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-4xl font-bold font-heading mb-12">
          Skills<span className="text-primary">.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <h3 className="text-xl text-primary font-semibold">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
