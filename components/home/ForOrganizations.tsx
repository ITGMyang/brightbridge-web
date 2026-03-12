import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ForOrganizations() {
    return (
        <section id="for-organizations" className="flex-1">
            <section className="bg-primary-950 text-white py-24 px-4 text-center">
                <div className="container-custom max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Partner with <span className="text-primary-400">BrightBridge</span>
                    </h1>
                    <p className="text-xl text-gray-300">
                        Amplify your clinic's reach and provide continuous care for waitlisted families.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
                            alt="Organizations and professionals team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Extend Your Clinic's Footprint</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            For hospitals, therapy centers, and schools, managing waitlists is a severe challenge.
                            Our platform allows organizations to provide evidence-based, parent-led interventions
                            scalable to hundreds of families simultaneously.
                        </p>
                        <div className="pt-6">
                            <Button size="lg" variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-50" asChild>
                                <Link href="/contact">Contact Institutional Sales</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
