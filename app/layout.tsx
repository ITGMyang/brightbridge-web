import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "BrightBridge Autism Care | Early Intervention Platform",
    description: "Early, accessible, and personalized autism intervention — combining AI technology with compassionate care.",
    keywords: ["autism", "early intervention", "AI", "parent coaching", "Canada", "ABA therapy"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={nunito.className}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
