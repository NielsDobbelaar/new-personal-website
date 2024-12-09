import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import { DM_Sans } from 'next/font/google';
import Nav from '@/components/Nav/Nav';

export const metadata: Metadata = {
  title: 'Niels Dobbelaar',
  description: 'A personal website of Niels Dobbelaar',
};

const dmSans = DM_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }: Readonly) {
  return (
    <html className={dmSans.className} lang="en">
      <body className="min-h-screen antialiased">
        <header>
          <Nav />
        </header>
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
