import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/constants/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold font-heading mb-4">
            My Projects<span className="text-primary">.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Here are some of the projects I've worked on. Each project showcases
            different skills and technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="overflow-hidden border-0 shadow-sm transition-all hover:shadow-md h-full">
                  <CardContent className="p-0 h-full">
                    <div className="relative h-[280px] w-full bg-[#f5f5f7] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Image
                          src={project.icon}
                          alt={`${project.title} icon`}
                          width={20}
                          height={20}
                        />
                        <h3 className="text-xl font-semibold">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
