import type { Metadata } from 'next';
import './globals.css';
import { FloatingChatButton } from '@/components/site';

export const metadata: Metadata = {
  title: 'Kalaam Tours & Travels | Umrah and Visa Specialists',
  description: 'Umrah and visa specialists crafting blessed journeys with care.',
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