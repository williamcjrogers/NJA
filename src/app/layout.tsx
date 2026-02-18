import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import EmergencyBanner from "@/components/layout/EmergencyBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import RevealProvider from "@/components/RevealProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nicolas James Environmental | Specialist Environmental Services for Critical Infrastructure",
  description:
    "Specialist vegetation management, arboriculture, and grounds maintenance for utilities, local authorities, and infrastructure contractors. Directly employed teams, owned equipment, infrastructure-sector standards.",
  keywords: [
    "vegetation management contractor UK",
    "environmental services contractor",
    "utility vegetation management",
    "arboriculture contractor",
    "grounds maintenance contractor",
    "NRSWA traffic management",
    "emergency tree removal",
    "watercourse management",
  ],
  authors: [{ name: "Nicolas James Environmental" }],
  metadataBase: new URL("https://nicolasjames.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Nicolas James Environmental",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <EmergencyBanner />
        <Header />
        <RevealProvider>
          <main id="main-content">{children}</main>
        </RevealProvider>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
