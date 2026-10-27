import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mizan Group — Websites, CRM & automation for UK businesses",
  description:
    "Mizan Group builds the websites, CRM systems, chatbots and integrations that let UK small and medium businesses sell more and spend less time on routine work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${onest.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
