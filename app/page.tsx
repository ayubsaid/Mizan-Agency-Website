import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Solutions from "@/components/Solutions";
import Industries from "@/components/Industries";
import Integrations from "@/components/Integrations";
import Cases from "@/components/Cases";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Solutions />
        <Industries />
        <Integrations />
        <Cases />
        <Process />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
