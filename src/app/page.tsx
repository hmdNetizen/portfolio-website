import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import MyStory from "@/components/MyStory";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProjectsShowcase />
      <Experience />
      <Skills />
      {/* <MyStory /> */}
      <Footer />
    </main>
  );
}
