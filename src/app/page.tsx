import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background text-foreground flex flex-col">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <About />
      <Footer />
    </main>
  );
}
