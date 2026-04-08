import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRAINFUEL | Cognitive Wellness where Neuroscience meets Nature",
  description:
    "Mental clarity, elevated calm and deeper sleep, powered by Mushrooms. Functional delights made by neuroscientists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} antialiased`}>
      <body className="min-h-screen font-syne">{children}</body>
    </html>
  );
}
