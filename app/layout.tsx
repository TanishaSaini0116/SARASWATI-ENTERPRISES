import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/MobileCTA";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Saraswati Enterprises | Industrial Water Treatment Solutions",
  description: "Leading provider of industrial, commercial, and residential water treatment solutions. RO Plants, ETP, STP, and AMC services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link href="https://db.onlinewebfonts.com/c/6e47ef470dd19698c911332a9b4d1cf4?family=Neue+Haas+Grotesk+Text+Pro" rel="stylesheet" />
        <link href="https://db.onlinewebfonts.com/c/dec0d9b4e22ca588dc20e1e2e09a59b5?family=Neue+Haas+Grotesk+Display+Pro+55+Roman" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <LenisProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LenisProvider>
      </body>
    </html>
  );
}
