import { ArrowRight, Eye, Target, TrendingUp } from "lucide-react";

const steps = [
    {
        icon: Eye,
        title: "Observe & Assess",
        description: "AI-powered analysis identifies your child&apos;s unique strengths and areas for growth.",
    },
    {
        icon: Target,
        title: "Personalize & Guide",
        description: "Customized intervention plans with real-time coaching for parents.",
    },
    {
        icon: TrendingUp,
        title: "Track & Improve",
        description: "Continuous monitoring and adaptive learning to maximize progress.",
    },
];

export default function HowItWorksSteps() {
    return (
        <section className="bg-gray-50 section-padding">
            <div className="container-custom">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        How It Works
                    </h2>
                    <p className="text-lg text-gray-600">
                        A simple, proven process to support your child&apos;s development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="relative">
                                <div className="flex flex-col items-center text-center">
                                    {/* Icon Circle */}
                                    <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-6">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Step Number */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                        {index + 1}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>

                                {/* Arrow (hidden on last item and mobile) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-8 -right-4 text-gray-300">
                                        <ArrowRight className="w-8 h-8" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
