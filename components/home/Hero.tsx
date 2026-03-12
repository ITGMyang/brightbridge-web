import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="relative bg-white overflow-hidden">
            <div className="container-custom section-padding py-32 md:py-40">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Text Content */}
                    <div className="space-y-8">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
                            Catching Autism Early,{" "}
                            <span className="text-primary-600">
                                Empowering Brighter Futures
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            Early, accessible, and personalized intervention — combining AI
                            technology with compassionate care.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button variant="default" size="xl" asChild>
                                <Link href="/contact">Get Started</Link>
                            </Button>
                            <Button variant="outline" size="xl" asChild>
                                <Link href="/contact">Book a Free Consultation</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
