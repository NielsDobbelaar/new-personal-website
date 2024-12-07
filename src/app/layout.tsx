import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { DM_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: "Niels Dobbelaar",
  description: "A personal website of Niels Dobbelaar",
};

  const dmSans = DM_Sans({subsets: ['latin']})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html className={dmSans.className} lang="en">
      <body className="antialiased">
      <Header />
        <main>
        {children}
        </main>
      <Footer />
      </body>
    </html>
  );
}
