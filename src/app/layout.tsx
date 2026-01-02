import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { NOVA_FB, NOVA_INSTA, NOVA_YT } from "@/data/links";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NOVA Wushu Academy",
  description: "Learn professional Wushu (Kung Fu) and Taiji (Tai Chi) in Chantilly, Northern Virginia. We offer barehand and weapon classes for kids and adults — sign up for a trial class today!",
  keywords: "wushu, taiji, taichi, kung fu, chantilly, northern virginia, martial arts classes, trial class, weapon classes, kids wushu",
  authors: [{ name: "NOVA Wushu Academy" }],
  creator: "NOVA Wushu Academy",
  publisher: "NOVA Wushu Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Use the published canonical domain (update during development if needed)
  metadataBase: new URL("https://www.novawushuacademy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NOVA Wushu Academy - Premier Martial Arts Training",
    description: "Professional Wushu and Taiji training in Northern Virginia. Build confidence, discipline, and excellence through martial arts.",
    url: "https://www.novawushuacademy.com/",
    siteName: "NOVA Wushu Academy",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NOVA Wushu Academy - Wushu and Taiji classes in Chantilly, VA",
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
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "NOVA Wushu Academy",
    description:
      "Professional Wushu (Kung Fu) and Taiji (Tai Chi) classes in Chantilly, Northern Virginia. Barehand and weapon classes for kids and adults. Sign up for a trial class.",
    url: "https://www.novawushuacademy.com/",
    telephone: "(703) 953-3115",
    address: {
      "@type": "PostalAddress",
      streetAddress: "14088 G Sullyfield Circle",
      addressLocality: "Chantilly",
      addressRegion: "VA",
      postalCode: "20151",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "contact@novawushuacademy.com",
        contactType: "customer support",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "17:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    sameAs: [NOVA_FB, NOVA_INSTA, NOVA_YT],
    priceRange: "$$",
  } as const;

  const localBusinessJson = JSON.stringify(localBusinessSchema);
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: localBusinessJson }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TD9MCHQ1E4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TD9MCHQ1E4');
            `,
          }}
        />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
