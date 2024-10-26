import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Home page",
  description: "This is Home page",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
    </main>
  );
}
