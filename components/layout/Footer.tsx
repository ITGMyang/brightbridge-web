import Link from "next/link";
import Image from "next/image";

const footerLinks = {
    product: [
        { name: "Solutions", href: "#solutions" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
    ],
    audience: [
        { name: "For Parents", href: "#for-parents" },
        { name: "For Organizations", href: "#for-organizations" },
    ],
    company: [
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/images/Logo+Text.png"
                                alt="BrightBridge Logo"
                                width={240}
                                height={48}
                                className="w-auto h-8 sm:h-10 mb-2"
                            />
                        </Link>
                        <p className="text-sm text-gray-600 mb-4">
                            Early, accessible, and personalized autism intervention.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Audience Links */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">For You</h3>
                        <ul className="space-y-3">
                            {footerLinks.audience.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center">
                        © {new Date().getFullYear()} BrightBridge Autism Care. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
