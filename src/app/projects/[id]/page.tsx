import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = [
  {
    id: "brand-central-website",
    title: "Brand Central",
    description:
      "A B2B e-commerce platform specializing in supplying a wide range of products directly to pharmacies, retail stores, and supermarkets.",
    image: "/brand-central-2.png",
    icon: "https://ext.same-assets.com/2600242455/3783633550.svg",
    full_description:
      "Brand Central is a B2B e-commerce platform based in NY which specializes in wholesale product distribution to pharmacies, retail stores, and supermarkets. The platform offers a user-friendly interface for browsing and purchasing a wide range of products. It includes features such as secure payment processing, order tracking, and a comprehensive product catalog.",

    technologies: [
      "NextJS",
      "Jest",
      "React Testing Library",
      "Tanstack Query",
      "Shadcn UI",
      "Zustand",
      "Sentry",
      "Authorize.net",
    ],
    links: {
      live: "https://brandcentralwholesale.com",
      github: null,
    },
  },
  {
    id: "brand-central-admin",
    title: "Brand Central Admin",
    description:
      "The behind-the-scenes command center where products, customers and other wholesale operations are managed.",
    image: "/brand-central-admin.png",
    icon: "https://ext.same-assets.com/2600242455/2563901416.svg",
    full_description:
      "Brand Central Admin is the administrative interface for the Brand Central B2B e-commerce platforms (website and mobile apps). It provides a comprehensive dashboard for managing wholesale operations, including inventory management, order processing, and customer support.",
    technologies: [
      "React",
      "Redux",
      "RTK Query",
      "Vite",
      "Material UI",
      "Socket IO",
      "MapQuest API",
    ],
    links: {
      live: "https://admin.brandcentralwholesale.com",
      github: null,
    },
  },
  {
    id: "bc-wholesale",
    title: "BC Wholesale",
    description:
      "An iOS and Android mobile application designed for B2B wholesale products purchase.",
    image: "/bcwholesale-banner.png",
    icon: "https://ext.same-assets.com/2600242455/548389142.svg",
    full_description:
      "Brand Central is a B2B e-commerce platform based in NY which specializes in wholesale product distribution to pharmacies, retail stores, and supermarkets. This application was developed to offers a user-friendly interface for browsing and purchasing a wide range of products on the go. It includes features such as secure payment processing, order placement and tracking, and product catalog.",
    technologies: [
      "React Native",
      "Expo",
      "RTK Query",
      "Navtivewind",
      "Redux",
      "React Hook Form",
    ],
    links: {
      live: "https://apps.apple.com/us/app/bc-wholesale/id6499428765?platform=iphone",
      github: null,
    },
  },
  {
    id: "brand-central-wholesale",
    title: "Brand Central Wholesale",
    description:
      "Modern-looking restaurant discovery platform featuring real-time search, reviews, and ratings.",
    image: "/bcw-banner.png",
    icon: "https://ext.same-assets.com/2600242455/260646423.svg",
    full_description:
      "Brand Central Wholesale is a mobile application designed for the company's sales representatives. It provides the ease of order placement for customers being serviced by each sales rep. The app is built with React Native and Expo, ensuring a smooth user experience on both iOS and Android devices.",
    technologies: [
      "React Native",
      "Expo",
      "RTK Query",
      "Redux",
      "Nativewind",
      "React Navigation",
      "React Hook Form",
    ],
    links: {
      live: null,
      github: null,
    },
  },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-16">
        <div className="container">
          <Link
            href="/projects"
            className="flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
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
              className="mr-2"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Projects
          </Link>

          <div className="relative w-full h-[320px] md:h-[500px] rounded-xl overflow-hidden mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </div>

          <div className="flex items-center gap-3 mb-4">
            <Image
              src={project.icon}
              alt={`${project.title} icon`}
              width={24}
              height={24}
            />
            <h1 className="text-4xl font-bold font-heading">{project.title}</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-semibold font-heading">
                Project Overview
              </h2>
              <p className="text-lg text-muted-foreground">
                {project.full_description}
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold font-heading mb-4">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted/50 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold font-heading mb-4">
                  Links
                </h2>
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-primary text-white font-medium hover:bg-primary/90"
                  >
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live Site
                      </a>
                    )}
                  </Button>
                  {project.links.github && (
                    <Button
                      asChild
                      variant="outline"
                      className="w-full font-medium"
                    >
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View GitHub Repository
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
