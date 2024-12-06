import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niels Dobbelaar",
  description: "A personal website of Niels Dobbelaar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" antialiased">{children}</body>
    </html>
  );
}
