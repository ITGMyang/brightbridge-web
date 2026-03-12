import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <section id="contact" className="flex-1 bg-white">
            <section className="py-24 px-4">
                <div className="container-custom max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Get in Touch</h1>
                            <p className="text-xl text-gray-600">
                                Whether you're a parent seeking guidance or an organization looking to partner,
                                our team is here to help.
                            </p>
                        </div>

                        <div className="space-y-6 text-gray-600">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                                <p>support@brightbridge.care</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Office Hours</h3>
                                <p>Mon - Fri: 9:00 AM - 6:00 PM (EST)</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-1">Headquarters</h3>
                                <p>Toronto, ON, Canada</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Placeholder */}
                    <div className="bg-gray-50 p-8 rounded-card border border-gray-100 shadow-soft">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-900">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-900">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-900">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-900">Message</label>
                                <textarea rows={5} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="How can we help you?"></textarea>
                            </div>
                            <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white" size="lg">
                                Send Message
                            </Button>
                        </form>
                    </div>

                </div>
            </section>
        </section>
    );
}
