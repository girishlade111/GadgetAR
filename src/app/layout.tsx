import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GadgetAR - Webflow Template",
  description: "GadgetAR Webflow Template - A premium AR gadget showcase template with stunning design and powerful features.",
  keywords: ["GadgetAR", "Webflow", "Template", "AR", "Gadget"],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#0a0a0a] text-white font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
