"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const leftNavigation = [
    { name: "Solutions", href: "#solutions" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "For Parents", href: "#for-parents" },
];

const rightNavigation = [
    { name: "For Organizations", href: "#for-organizations" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
];

const mobileNavigation = [...leftNavigation, ...rightNavigation, { name: "Contact", href: "#contact" }];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0,
        });

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <nav className="container-custom py-3" aria-label="Main navigation">
                <div className="flex items-center justify-between">

                    {/* Desktop Left Navigation */}
                    <div className="hidden lg:flex lg:gap-x-8 flex-1 justify-end pr-8 items-center">
                        {leftNavigation.map((item) => {
                            const isActive = activeSection === item.href.replace("#", "");
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative text-sm font-medium transition-all duration-300 whitespace-nowrap py-1 ${
                                        isActive ? "text-primary-600" : "text-gray-600 hover:text-primary-600"
                                    }`}
                                >
                                    {item.name}
                                    <span 
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-primary-600 transition-all duration-300 ${
                                            isActive ? "w-full opacity-100" : "w-0 opacity-0"
                                        }`} 
                                    />
                                </Link>
                            );
                        })}
                    </div>

                    {/* Logo - Centered */}
                    <Link href="/" className="flex-shrink-0 z-10 relative group flex items-center justify-center">
                        {/* Text Logo (holds the width, fades in on hover) */}
                        <Image
                            src="/images/Logo+Text.png"
                            alt="BrightBridge Logo"
                            width={320}
                            height={64}
                            className="w-auto h-12 sm:h-16 lg:h-20 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                            priority
                        />
                        {/* Icon Logo (absolute centered, fades out on hover) */}
                        <Image
                            src="/images/Logo.png"
                            alt="BrightBridge Icon"
                            width={64}
                            height={64}
                            className="w-auto h-10 sm:h-12 lg:h-16 absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                            priority
                        />
                    </Link>

                    {/* Desktop Right Navigation & CTA */}
                    <div className="hidden lg:flex lg:gap-x-8 flex-1 justify-start pl-8 items-center">
                        {rightNavigation.map((item) => {
                            const isActive = activeSection === item.href.replace("#", "");
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`relative text-sm font-medium transition-all duration-300 whitespace-nowrap py-1 ${
                                        isActive ? "text-primary-600" : "text-gray-600 hover:text-primary-600"
                                    }`}
                                >
                                    {item.name}
                                    <span 
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-primary-600 transition-all duration-300 ${
                                            isActive ? "w-full opacity-100" : "w-0 opacity-0"
                                        }`} 
                                    />
                                </Link>
                            );
                        })}
                        <Button variant="default" size="default" asChild className="ml-2 font-bold px-6">
                            <Link href="#contact">Get Started</Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex flex-1 justify-end">
                        <button
                            type="button"
                            className="p-2 text-gray-700"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
                        <div className="flex flex-col space-y-4">
                             {mobileNavigation.map((item) => {
                                const isActive = activeSection === item.href.replace("#", "");
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`flex items-center gap-2 text-base font-medium transition-colors ${
                                            isActive ? "text-primary-600" : "text-gray-600"
                                        }`}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary-600" />}
                                        {item.name}
                                    </Link>
                                );
                            })}
                            <Button variant="default" size="lg" asChild className="w-full">
                                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
