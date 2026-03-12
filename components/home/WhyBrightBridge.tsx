import { Award, Zap, Target } from "lucide-react";

const differentiators = [
    {
        icon: Award,
        title: "Canada's First",
        description: "Canada's first online early-intervention platform for autism care.",
    },
    {
        icon: Target,
        title: "Prevention-Focused",
        description: "Focused on prevention and early stage support, not just treatment.",
    },
    {
        icon: Zap,
        title: "AI-Driven Personalization",
        description: "AI-driven personalization, not static one-size-fits-all programs.",
    },
];

export default function WhyBrightBridge() {
    return (
        <section className="bg-gray-900 text-white section-padding">
            <div className="container-custom">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Why BrightBridge
                    </h2>
                    <p className="text-lg text-gray-400">
                        We&apos;re pioneering a new approach to early autism intervention.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {differentiators.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="text-center">
                                <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
