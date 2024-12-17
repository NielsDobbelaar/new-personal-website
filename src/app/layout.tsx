import './globals.css';
import Footer from '@/components/Footer/Footer';
import { DM_Sans } from 'next/font/google';
import Nav from '@/components/Nav/Nav';

const dmSans = DM_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={dmSans.className} lang="en">
      <body className="flex min-h-screen flex-col overflow-x-hidden antialiased">
        <header id="topAnchor">
          <Nav />
        </header>
        <main className="flex grow flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
