import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import NewsletterOptin from "@/app/components/newsletter-optin";
import "./globals.css";
import "./bg.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Blue Boost",
    template: "%s | Blue Boost",
  },
  description:
    "Looking for the top SEO agency? We can help improve your search engine optimization with our custom services. ✓ Get started!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <NewsletterOptin />
        <Footer />
      </body>
    </html>
  );
}
