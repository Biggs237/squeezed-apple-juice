import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Squeezed | Fresh Apple Juice',
  description: 'The only place you need to get your juice. Premium cold-pressed apple juice delivered fresh.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
