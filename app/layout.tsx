import type { Metadata } from "next";

import "@/assets/css/main.scss";
import { Header } from "@/base/header";
import { Footer } from "@/base/footer";

export const metadata: Metadata = {
  title: "Affonso Landing Page",
  description: "Landing page built with the complete Affonso design system",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={"rootVariables"}>
          <Header />
          <main className="main">
            {children}
            <Footer />
          </main>
          <div id="popups"></div>
        </div>
      </body>
    </html>
  );
}
