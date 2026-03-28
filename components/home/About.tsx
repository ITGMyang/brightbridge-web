const teamMembers = [
    {
        name: "SAISAI YANG",
        role: "CEO",
        image: "/images/team/SAISAI YANG.png",
        description: [
            { highlight: "14+ years of expertise", text: " in autism intervention and preventive care." },
            { highlight: "Founder of multiple health institutions", text: ", specializing in children's developmental psychology." },
            { highlight: "Innovative leader", text: " in using AI and technology for early autism care at BrightBridge Autism Care." }
        ]
    },
    {
        name: "WEI YANG",
        role: "CFO",
        image: "/images/team/WEI YANG.png",
        description: [
            { highlight: "16+ years of expertise", text: " in finance, investment, and portfolio management, specializing in long-term capital appreciation." },
            { highlight: "Proven track record", text: " of managing diverse asset classes." },
            { highlight: "Leader in wealth management", text: ", preserving and growing family wealth through holistic strategies, estate planning, and risk management." }
        ]
    },
    {
        name: "YUANJUN LI",
        role: "COO",
        image: "/images/team/YUANJUN LI.png",
        description: [
            { highlight: "16+ years of expertise", text: " in strategic HR management, talent acquisition, and organizational development across diverse industries." },
            { highlight: "Proven track record", text: " in building high-performance teams and driving business growth through effective HR strategies." },
            { highlight: "Leader in HR and administration", text: ", implementing holistic HR solutions, performance management systems, and employee development programs to enhance organizational efficiency." }
        ]
    },
    {
        name: "XIAODONG YANG",
        role: "CTO",
        image: "/images/team/XIAODONG YANG.png",
        description: [
            { highlight: "20+ years of experience", text: " specializing in enterprise systems (ERP, CRM, e-commerce, mobile apps)." },
            { highlight: "Proven expertise", text: " across industries like real estate, finance, education, and agriculture, with a focus on IT and e-commerce integration." },
            { highlight: "Leader in innovation", text: ", skilled in the full software lifecycle from analysis to implementation." }
        ]
    },
    {
        name: "JIAQI WU",
        role: "CMO",
        image: "/images/team/JIAQI WU.png",
        description: [
            { highlight: "10+ years of expertise", text: " in strategic marketing, client engagement, and business within the hospitality industry." },
            { highlight: "Proven leader", text: " in designing and implementing successful marketing campaigns that drive corporate client growth and improve brand visibility." },
            { highlight: "Specialist", text: " in digital media engagement and cross-functional collaboration to create impactful promotional materials." }
        ]
    },
    {
        name: "JING WANG",
        role: "Customer Engagement Manager",
        image: "/images/team/JING WANG.png",
        description: [
            { highlight: "12+ years of expertise", text: " in clinical nursing, specializing in high-pressure environments and critical patient care." },
            { highlight: "Skilled in crisis management", text: ", and patient communication, delivering compassionate care while managing complex medical situations." },
            { highlight: "Focused on customer service", text: ", transitioning to a role supporting families and clients in the autism care sector with empathetic and effective service." }
        ]
    }
];

export default function About() {
    return (
        <section id="about" className="flex-1 scroll-mt-6">
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
                            src="/images/About.png"
                            alt="The BrightBridge professional team"
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
                        <div className="inline-block h-1 w-12 bg-primary-600 mb-2"></div>
                        <h2 className="text-4xl font-bold text-gray-900 tracking-tight uppercase">Our Team</h2>
                        <p className="text-lg text-gray-600">
                            A multidisciplinary group of experts bridging the gap between clinical excellence and technological innovation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-48 h-48 md:w-56 md:h-56 relative mb-6">
                                    <div className="absolute inset-0 rounded-full bg-gray-100 shadow-inner"></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover rounded-full relative z-10 shadow-lg border-4 border-white"
                                    />
                                </div>
                                <div className="text-center space-y-2 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 tracking-wide uppercase">{member.name}</h3>
                                    <p className="text-gray-500 font-medium tracking-wider text-sm">{member.role}</p>
                                </div>
                                <ul className="space-y-4 text-left w-full max-w-sm">
                                    {member.description.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <span className="text-primary-600 mt-1.5 flex-shrink-0">•</span>
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                <span className="text-primary-600 font-bold">{item.highlight}</span>
                                                {item.text}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}
