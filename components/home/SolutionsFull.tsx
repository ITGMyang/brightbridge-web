import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function Solutions() {
    return (
        <section id="solutions" className="flex-1 scroll-mt-6 lg:scroll-mt-6">
            {/* Header Section */}
            <section className="bg-primary-50 py-20 px-4">
                <div className="container-custom max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Comprehensive <span className="text-primary-600">Autism Care</span> Solutions
                    </h1>
                    <p className="text-xl text-gray-600">
                        Tailored interventions that bridge the gap between clinical care and at-home learning.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-4">
                <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Personalized Learning Plans</h2>
                        <p className="text-gray-600 text-lg">
                            Every child is unique. Our solutions use AI-driven assessments to create
                            a roadmap specific to your child&apos;s developmental needs.
                        </p>
                        <ul className="space-y-4 pt-4">
                            {[
                                "Language and Communication Skills",
                                "Motor Skills Development",
                                "Social & Emotional Regulation",
                                "Life Skills & Independence"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center space-x-3 text-gray-700">
                                    <CheckCircle2 className="text-primary-500 w-5 h-5 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-6">
                            <Button size="lg" asChild>
                                <Link href="/contact">Get a Tailored Plan</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="/images/lecture.png"
                            alt="Comprehensive Autism Care Solutions"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </section>
    );
}
