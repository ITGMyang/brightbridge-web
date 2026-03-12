import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Brain, Target, Clock, TrendingUp } from "lucide-react";

const solutions = [
    {
        icon: Brain,
        title: "AI-Powered Parent Coach",
        description: "Real-time, personalized guidance tailored to your child's unique needs and development.",
    },
    {
        icon: Target,
        title: "Personalized Training Programs",
        description: "Adaptive programs across language, motor, and social skills development.",
    },
    {
        icon: Clock,
        title: "24/7 Remote Access",
        description: "Support and resources available anywhere, anytime, on your schedule.",
    },
    {
        icon: TrendingUp,
        title: "Data-Driven Progress Tracking",
        description: "Continuous insights and measurable progress to guide your child's journey.",
    },
];

export default function SolutionCards() {
    return (
        <section className="bg-white section-padding">
            <div className="container-custom">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Our Solution
                    </h2>
                    <p className="text-lg text-gray-600">
                        Technology-driven, compassionate care that makes early intervention accessible to every family.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {solutions.map((solution, index) => {
                        const Icon = solution.icon;
                        return (
                            <Card key={index} className="group hover:shadow-md transition-all">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-50 transition-colors">
                                        <Icon className="w-6 h-6 text-gray-900" />
                                    </div>
                                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-gray-600">
                                        {solution.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
