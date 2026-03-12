import { Card, CardContent } from "@/components/ui/card";

const stats = [
    {
        stat: "1 in 36",
        label: "children with autism in the U.S.",
    },
    {
        stat: "1 in 50",
        label: "children with autism in Canada",
    },
    {
        stat: "4 years",
        label: "average diagnosis age",
    },
    {
        stat: "$45k–$80k",
        label: "ABA therapy costs per year",
    },
];

export default function ProblemSection() {
    return (
        <section className="bg-gray-50 section-padding">
            <div className="container-custom">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        The Challenge We&apos;re Addressing
                    </h2>
                    <p className="text-lg text-gray-600">
                        Early intervention is critical, but access and affordability remain significant barriers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((item, index) => (
                        <Card key={index} className="text-center bg-white">
                            <CardContent className="pt-8 pb-8">
                                <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                                    {item.stat}
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.label}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
