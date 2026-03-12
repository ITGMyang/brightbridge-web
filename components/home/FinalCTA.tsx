import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
    return (
        <section className="bg-primary-600 text-white section-padding">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Start Building a Brighter Path Today
                    </h2>
                    <p className="text-lg text-primary-100">
                        Join families across Canada who are giving their children the early support they deserve.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button variant="secondary" size="xl" asChild>
                            <Link href="/contact">Get Started</Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="xl"
                            asChild
                            className="bg-transparent border-white text-white hover:bg-white hover:text-primary-600"
                        >
                            <Link href="/contact">Book a Free Consultation</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
