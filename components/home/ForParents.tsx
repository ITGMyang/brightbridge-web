import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ForParents() {
    return (
        <section id="for-parents" className="flex-1">
            <section className="bg-white py-20 px-4">
                <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                            Empowering <span className="text-primary-600">Parents</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            You are your child&apos;s most important teacher. BrightBridge provides you with the guidance,
                            tools, and support to foster communication and development from the comfort of your home.
                        </p>
                        <ul className="space-y-3 pt-4 text-gray-700">
                            <li>✓ Daily, manageable 15-minute exercises.</li>
                            <li>✓ Stress-free progress tracking.</li>
                            <li>✓ Direct connection to professional coaching when needed.</li>
                        </ul>
                        <div className="pt-6">
                            <Button size="lg" asChild>
                                <Link href="/contact">Join BrightBridge</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80"
                            alt="Parent and child"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </section>
    );
}
