import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import LoadingPage from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Parkistra",
    description: "Bring out the hero in you",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="bg-[#ECE3CE]">
            <body className={inter.className}>
                {/* <main className="p-4 max-w-7xl m-auto min-w-[300px]">
                    
                </main> */}
                <main className="bg-[#ECE3CE]">
                    <AuthProvider>
                        <Navbar />
                        <div className="flex flex-col min-h-[100vh]">
                            <div style={{ flex: "1 0 auto" }}>
                                <Suspense fallback={<LoadingPage />}>{children}</Suspense>
                            </div>
                            <Footer />
                        </div>
                    </AuthProvider>
                </main>
            </body>
        </html>
    );
}
