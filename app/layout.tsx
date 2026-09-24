import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
});

const siteUrl = new URL("https://dnhport.vercel.app");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "آیدین دنیادیده — توسعه‌دهنده فرانت‌اند",
    template: "%s — آیدین دنیادیده",
  },
  description:
    "نمونه‌کار آیدین دنیادیده؛ توسعه‌دهنده فرانت‌اند با تمرکز بر رابط‌های کاربری تمیز، طراحی واکنش‌گرا، React و Next.js.",
  applicationName: "نمونه‌کار آیدین دنیادیده",
  authors: [{ name: "Aidin DNH" }],
  creator: "Aidin DNH",
  keywords: ["آیدین دنیادیده", "توسعه‌دهنده فرانت‌اند", "React", "Next.js", "توسعه وب", "نمونه‌کار", "طراحی واکنش‌گرا"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "آیدین دنیادیده — توسعه‌دهنده فرانت‌اند",
    description:
      "Portfolio of Aidin DNH, a front-end developer focused on clean interfaces, responsive design, React, and Next.js.",
    siteName: "نمونه‌کار آیدین دنیادیده",
    locale: "fa_IR",
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
  jobTitle: "توسعه‌دهنده فرانت‌اند",
  email: "mailto:aidin.dnh@gmail.com",
  sameAs: [
    "https://github.com/Mr-dnh",
    "https://t.me/Idndnh",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
