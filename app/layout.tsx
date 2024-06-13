import { Itim as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/shared/lib';
// Components
import { Background, Container, Header, Providers, Sidebar } from '@/shared/components';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Providers attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <Background />
          <Container>
            <Sidebar />
            <Header>{children}</Header>
          </Container>
        </Providers>
      </body>
    </html>
  );
}
