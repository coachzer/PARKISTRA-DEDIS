import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Parkistra",
    description: "Bring out the hero in you",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* <main className="p-4 max-w-7xl m-auto min-w-[300px]">
                    
                </main> */}
                <main>
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    );
}
