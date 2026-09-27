import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'StockApp Auth',
  description: 'Modern authentication UI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
