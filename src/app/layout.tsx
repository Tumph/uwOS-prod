import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'uwOS',
  description: 'Operating system for Waterloo students',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
    ],
    shortcut: '/favicon-64x64.png',
    apple: '/UW-optimized.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* The favicon.ico in the public directory will be automatically used */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}