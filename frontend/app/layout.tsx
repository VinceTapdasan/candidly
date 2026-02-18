import type { Metadata } from 'next';
import { Liter, JetBrains_Mono, Zalando_Sans_Expanded } from 'next/font/google';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import './globals.css';

const liter = Liter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-liter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

// Zalando Sans Expanded for monster display headers
const displayFont = Zalando_Sans_Expanded({
  subsets: ['latin'],
  weight: ['800', '900'],
  variable: '--font-zalando',
});

export const metadata: Metadata = {
  title: 'candidly - Get Hired by Being Yourself',
  description:
    'The reverse job platform where candidates post vlogs and recruiters discover talent.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${liter.variable} ${jetbrainsMono.variable} ${displayFont.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
