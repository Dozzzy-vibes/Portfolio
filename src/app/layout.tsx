import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Chidozie Uwakwe — Full-Stack Developer Portfolio",
  description:
    "Portfolio of Chidozie Uwakwe, a full-stack developer specializing in React, Next.js, and Node.js. Building beautiful, performant, and accessible digital experiences.",
  keywords: [
    "portfolio",
    "developer",
    "react",
    "next.js",
    "full-stack",
    "web developer",
  ],
  openGraph: {
    title: "Chidozie Uwakwe — Full-Stack Developer Portfolio",
    description:
      "Full-stack developer crafting beautiful, performant, and accessible digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
