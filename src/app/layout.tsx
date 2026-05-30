import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UK Beauty & Wellness Directory | WhatsApp-Ready Businesses",
  description:
    "Discover 30 top-rated beauty, wellness, and health businesses across the UK. Book instantly via WhatsApp.",
  keywords: "UK beauty salon, wellness, health, WhatsApp booking, Birmingham, Manchester, Bradford",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
