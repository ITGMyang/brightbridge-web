import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionsFull from "@/components/home/SolutionsFull";
import HowItWorksFull from "@/components/home/HowItWorksFull";
import ForParents from "@/components/home/ForParents";
import ForOrganizations from "@/components/home/ForOrganizations";
import Pricing from "@/components/home/Pricing";
import About from "@/components/home/About";
import Contact from "@/components/home/Contact";

export default function Home() {
    return (
        <div className="scroll-smooth">
            <Hero />
            <ProblemSection />
            <SolutionsFull />
            <HowItWorksFull />
            <ForParents />
            <ForOrganizations />
            <Pricing />
            <About />
            <Contact />
        </div>
    );
}
