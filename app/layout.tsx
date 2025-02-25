import "./globals.css";
import { Itim as FontSans } from "next/font/google";
import { Metadata } from "next";
import { cn } from "@/shared/lib";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
