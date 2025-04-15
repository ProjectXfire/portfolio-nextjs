import "./globals.css";
import { Metadata } from "next";
import { Itim as FontSans } from "next/font/google";
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

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props): React.ReactElement {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        {children}
      </body>
    </html>
  );
}
