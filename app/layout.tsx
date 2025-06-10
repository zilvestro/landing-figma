import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { cn } from "../lib/utils";
import "./globals.css";

const sansFont = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

const headlineFont = GeistSans;

export const metadata: Metadata = {
  title: "Affonso Landing Page",
  description: "Landing page built with the complete Affonso design system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-white font-sans text-foreground antialiased',
          sansFont.variable,
          headlineFont.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
