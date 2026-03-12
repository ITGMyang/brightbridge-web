import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building2 } from "lucide-react";

export default function WhoWeServe() {
    return (
        <section className="bg-white section-padding">
            <div className="container-custom">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Who We Serve
                    </h2>
                    <p className="text-lg text-gray-600">
                        Supporting families and organizations in their autism care journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Parents */}
                    <Card className="group hover:shadow-md transition-all">
                        <CardHeader>
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-50 transition-colors">
                                <Users className="w-6 h-6 text-gray-900" />
                            </div>
                            <CardTitle className="text-2xl">Parents</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <p className="text-gray-600">
                                Get early guidance, affordable support, and home-based intervention tools to help your child thrive.
                            </p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <span className="text-primary-600 mr-2 mt-0.5">✓</span>
                                    <span>Early guidance before formal diagnosis</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary-600 mr-2 mt-0.5">✓</span>
                                    <span>Affordable, accessible support</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary-600 mr-2 mt-0.5">✓</span>
                                    <span>Home-based intervention</span>
                                </li>
                            </ul>
                            <div className="pt-2">
                                <Button variant="default" size="lg" asChild className="w-full">
                                    <Link href="/for-parents">Learn More</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Organizations */}
                    <Card className="group hover:shadow-md transition-all">
                        <CardHeader>
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-50 transition-colors">
                                <Building2 className="w-6 h-6 text-gray-900" />
                            </div>
                            <CardTitle className="text-2xl">Organizations</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <p className="text-gray-600">
                                Schools, rehab centers, and clinics can integrate our platform for extended care and better outcomes.
                            </p>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <span className="text-primary-600 mr-2 mt-0.5">✓</span>
                                    <span>Seamless integration with existing programs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary-600 mr-2 mt-0.5">✓</span>
                                    <span>Extended care capabilities</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary-600 mr-2 mt-0.5">✓</span>
                                    <span>Data-driven insights for better outcomes</span>
                                </li>
                            </ul>
                            <div className="pt-2">
                                <Button variant="outline" size="lg" asChild className="w-full">
                                    <Link href="/for-organizations">Explore Partnerships</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
