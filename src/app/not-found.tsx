import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-32">
        <div className="container max-w-3xl mx-auto text-center">
          <h1 className="text-7xl md:text-9xl font-bold font-heading mb-6 text-primary">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button
            asChild
            className="bg-primary text-white font-medium hover:bg-primary/90"
          >
            <Link href="/">Go Back Home</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
