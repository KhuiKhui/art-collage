import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'Art Collage',
  description: 'My Art Journey',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-prim font-base flex h-screen w-screen flex-col items-center justify-between antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
