export default function About() {
    return (
        <section id="about" className="flex-1">
            <section className="bg-white py-24 px-4">
                <div className="container-custom max-w-4xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        About <span className="text-primary-600">BrightBridge</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        We believe that early intervention shouldn&apos;t be a privilege limited by geography,
                        cost, or diagnostic waiting lists.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 bg-gray-50">
                <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                            alt="Our professional team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Founded by a dedicated team of therapists, pediatricians, and technologists,
                            BrightBridge was built to close the gap between when concerns are first noticed
                            and when formal therapy begins.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We use AI to empower the most important caregivers in a child&apos;s life: their parents.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 px-4 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
                        <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Meet Our Team</h2>
                        <p className="text-lg text-gray-600">
                            A multidisciplinary group of experts bridging the gap between clinical excellence and technological innovation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Member 1 */}
                        <div className="text-center space-y-4">
                            <div className="aspect-square relative rounded-2xl overflow-hidden mb-4 shadow-md mx-auto max-w-[280px]">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
                                    alt="Sarah Jenkins"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Dr. Sarah Jenkins</h3>
                            <p className="text-primary-600 font-medium">Chief Medical Officer</p>
                            <p className="text-sm text-gray-600">Pediatric Neurologist with 15+ years of experience in early autism diagnosis.</p>
                        </div>

                        {/* Member 2 */}
                        <div className="text-center space-y-4">
                            <div className="aspect-square relative rounded-2xl overflow-hidden mb-4 shadow-md mx-auto max-w-[280px]">
                                <img
                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80"
                                    alt="David Chen"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">David Chen</h3>
                            <p className="text-primary-600 font-medium">Head of Technology</p>
                            <p className="text-sm text-gray-600">Former lead AI engineer at top health-tech startups. Father of two.</p>
                        </div>

                        {/* Member 3 */}
                        <div className="text-center space-y-4">
                            <div className="aspect-square relative rounded-2xl overflow-hidden mb-4 shadow-md mx-auto max-w-[280px]">
                                <img
                                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                                    alt="Elena Rodriguez"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Elena Rodriguez</h3>
                            <p className="text-primary-600 font-medium">Lead Behavioral Analyst</p>
                            <p className="text-sm text-gray-600">BCBA-D specializing in parent-led intervention models and early childhood development.</p>
                        </div>

                        {/* Member 4 */}
                        <div className="text-center space-y-4">
                            <div className="aspect-square relative rounded-2xl overflow-hidden mb-4 shadow-md mx-auto max-w-[280px]">
                                <img
                                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
                                    alt="Marcus Thorne"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Marcus Thorne</h3>
                            <p className="text-primary-600 font-medium">Director of Partnerships</p>
                            <p className="text-sm text-gray-600">Connecting BrightBridge with clinical partners across North America to expand access.</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}
