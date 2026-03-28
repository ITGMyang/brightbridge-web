import { Button } from "@/components/ui/button";

export default function Pricing() {
    return (
        <section id="pricing" className="flex-1 bg-gray-50 py-20 px-4 min-h-[80vh] flex flex-col justify-center scroll-mt-6">
            <div className="container-custom max-w-5xl mx-auto">
                <div className="text-center space-y-4 mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Transparent Pricing</h1>
                    <p className="text-xl text-gray-600">Affordable early interventions for every family.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Basic Plan */}
                    <div className="bg-white p-8 rounded-card border border-gray-200 shadow-soft text-center">
                        <h2 className="text-2xl font-bold mb-2">Essential Access</h2>
                        <div className="text-5xl font-bold text-gray-900 my-6">$149<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                        <ul className="text-gray-600 space-y-3 mb-8 text-left max-w-xs mx-auto">
                            <li>✓ Daily recommended activities</li>
                            <li>✓ Core milestone tracking</li>
                            <li>✓ Basic progress reports</li>
                        </ul>
                        <Button className="w-full" variant="outline">Start Free Trial</Button>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-primary-950 text-white p-8 rounded-card border border-primary-900 shadow-card text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
                        <h2 className="text-2xl font-bold mb-2 text-primary-50">Premium Support</h2>
                        <div className="text-5xl font-bold text-white my-6">$299<span className="text-lg text-primary-200 font-normal">/mo</span></div>
                        <ul className="text-primary-100 space-y-3 mb-8 text-left max-w-xs mx-auto">
                            <li>✓ Everything in Essential</li>
                            <li>✓ Direct telehealth coaching (2x/mo)</li>
                            <li>✓ Advanced behavioral analytics</li>
                            <li>✓ Priority support</li>
                        </ul>
                        <Button className="w-full bg-primary-500 hover:bg-primary-600 text-white">Choose Premium</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
