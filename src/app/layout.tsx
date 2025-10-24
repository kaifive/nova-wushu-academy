import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NOVA Wushu Academy - Premier Martial Arts Training in Northern Virginia",
  description: "Professional Wushu and Taiji training in Northern Virginia. Build confidence, discipline, and excellence through martial arts. Sign up for a trial class today!",
  keywords: "wushu, taiji, martial arts, northern virginia, training, classes, competition",
  authors: [{ name: "NOVA Wushu Academy" }],
  creator: "NOVA Wushu Academy",
  publisher: "NOVA Wushu Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://novawushu.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NOVA Wushu Academy - Premier Martial Arts Training",
    description: "Professional Wushu and Taiji training in Northern Virginia. Build confidence, discipline, and excellence through martial arts.",
    url: "https://novawushu.com",
    siteName: "NOVA Wushu Academy",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NOVA Wushu Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOVA Wushu Academy - Premier Martial Arts Training",
    description: "Professional Wushu and Taiji training in Northern Virginia.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
