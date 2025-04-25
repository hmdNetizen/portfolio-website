import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import MyStory from "@/components/MyStory";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-16">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
            <div className="lg:w-1/3">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-[16px] border-background mb-8 lg:mb-0">
                <Image
                  src="/headshot.jpg"
                  alt="Luca - Frontend Developer"
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 768px) 300px, 400px"
                />
              </div>
            </div>

            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold font-heading mb-4">
                About Me<span className="text-primary">.</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                I'm Hamed Jimoh, a web and mobile app developer from the
                ever-buzzing city of Lagos, Nigeria. I have a strong affinity
                for building performant, user-friendly applications. I
                specialize in modern JavaScript ecosystems, particularly working
                with TypeScript, ReactJS, Next.js, React Native and Node.js.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                I work across both web and mobile (hello, React Native), but no
                matter the platform, performance is always top of mind. I love
                squeezing out milliseconds, breaking large tasks into clean
                hooks, and making sure every bit of code does just enough and no
                more. If there&apos;s a smarter or faster way to solve a
                problem, I&apos;ll probably chase it down just for fun.
              </p>
              <p className="text-lg text-muted-foreground">
                When I’m not buried in a project, I enjoy contributing to open
                source and also sharing dev tips, especially around debugging
                and getting unstuck on Stack Overflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Experience />
      <Skills />
      {/* <MyStory /> */}
      <Footer />
    </main>
  );
}
