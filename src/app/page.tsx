import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background text-foreground flex flex-col">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
