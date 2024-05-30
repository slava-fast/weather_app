import type { Metadata } from "next";
import { Inika } from "next/font/google";
import "./globals.css";
import Header from '@/components/header';

const inter = Inika({ weight: '700', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Will it rain?",
  description: "Fancy app that helps you to decide where to go on weekends!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-font-color bg-background text-xl`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
