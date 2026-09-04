import type { Metadata } from "next";
import "./globals.css";

const siteUrl = new URL("https://portfolio-mr-dnhs-projects.vercel.app");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Aidin DNH — Front-End Developer",
    template: "%s — Aidin DNH",
  },
  description:
    "Portfolio of Aidin DNH, a front-end developer focused on clean interfaces, responsive design, React, and Next.js.",
  applicationName: "Aidin DNH Portfolio",
  authors: [{ name: "Aidin DNH" }],
  creator: "Aidin DNH",
  keywords: [
    "Aidin DNH",
    "front-end developer",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "web developer",
    "portfolio",
    "responsive design",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Aidin DNH — Front-End Developer",
    description:
      "Portfolio of Aidin DNH, a front-end developer focused on clean interfaces, responsive design, React, and Next.js.",
    siteName: "Aidin DNH Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aidin DNH — Front-End Developer",
    description:
      "Portfolio of Aidin DNH, a front-end developer focused on clean interfaces, responsive design, React, and Next.js.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aidin DNH",
  url: siteUrl.toString(),
  jobTitle: "Front-End Developer",
  email: "mailto:aidin.dnh@gmail.com",
  sameAs: [
    "https://github.com/Mr-dnh",
    "https://t.me/Idndnh",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
