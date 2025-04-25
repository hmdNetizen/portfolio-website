import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold font-heading mb-4">
              Get In Touch<span className="text-primary">.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind or just want to chat? Feel free to reach
              out to me using the form below.
            </p>

            <ContactForm />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailTo:hameed.jimoh1601@gmail.com">
                    hameed.jimoh1601@gmail.com
                  </a>
                </p>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+2347086937133">+234 708 693-7133</a>
                </p>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
