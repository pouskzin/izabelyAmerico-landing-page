import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { About } from "@/components/sections/About";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { BookingSteps } from "@/components/sections/BookingSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { LeadForm } from "@/components/sections/LeadForm";
import { WhatsAppFloatingButton } from "@/components/shared/WhatsAppFloatingButton";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />

      <div className="flex-1">
        <Hero />
        <Benefits />
        <About />
        <ServicesGrid />
        <PortfolioGallery />
        <BookingSteps />
        <Testimonials />
        <FAQ />
        <LeadForm />
      </div>

      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}