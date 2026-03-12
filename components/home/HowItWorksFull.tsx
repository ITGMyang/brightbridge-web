import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="flex-1">
            <section className="bg-white py-20 px-4">
                <div className="container-custom max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        How <span className="text-primary-600">It Works</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                        A seamless, supportive journey designed for parents and trusted by clinicians.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 bg-gray-50">
                <div className="container-custom flex flex-col items-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="bg-white p-8 rounded-card shadow-soft border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6">1</div>
                            <h3 className="text-xl font-bold mb-4">Initial Assessment</h3>
                            <p className="text-gray-600">
                                Complete a comprehensive digital assessment to help us pinpoint your child's current milestones and needs.
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className="bg-white p-8 rounded-card shadow-soft border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6">2</div>
                            <h3 className="text-xl font-bold mb-4">Customized Roadmap</h3>
                            <p className="text-gray-600">
                                Receive a daily activity plan with easy-to-follow exercises customized for home learning.
                            </p>
                        </div>
                        {/* Step 3 */}
                        <div className="bg-white p-8 rounded-card shadow-soft border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6">3</div>
                            <h3 className="text-xl font-bold mb-4">Track Progress</h3>
                            <p className="text-gray-600">
                                Use our tool to review progress over time, adapting and evolving the roadmap as your child grows.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container-custom text-center">
                    <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-card mb-12 h-80 relative">
                        <img
                            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80"
                            alt="Learning and growing"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white p-6">
                            <h2 className="text-3xl font-bold mb-4">Ready to take the first step?</h2>
                            <Button size="lg" variant="default" asChild className="bg-primary-500 hover:bg-primary-600 text-white">
                                <Link href="/contact">Start Your Assessment</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
