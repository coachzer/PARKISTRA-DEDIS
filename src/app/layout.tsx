import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";

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
                    <Navbar />
                    <AuthProvider>{children}</AuthProvider>
                </main>
            </body>
        </html>
    );
}
