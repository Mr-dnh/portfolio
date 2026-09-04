import type { Metadata } from "next";
import "./globals.css";
import "./mobile-art-direction.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A creative developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
