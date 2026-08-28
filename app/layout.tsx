import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aidin — Frontend Developer",
  description: "Aidin's frontend developer portfolio.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
