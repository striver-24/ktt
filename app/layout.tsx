import type { Metadata } from 'next';
import './globals.css';
import { FloatingChatButton } from '@/components/site';

export const metadata: Metadata = {
  title: 'Kalaam Tours & Travels',
  description: 'Blessed Umrah journeys crafted with care.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingChatButton />
      </body>
    </html>
  );
}