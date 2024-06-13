import './globals.css';
import { Itim as FontSans } from 'next/font/google';
import { Metadata } from 'next';
import { cn } from '@/shared/lib';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
// Components
import { Background, Container, Header, Providers, Sidebar } from '@/shared/components';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400'],
});

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Providers attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <NextIntlClientProvider messages={messages}>
            <Background />
            <Container>
              <Sidebar />
              <Header>{children}</Header>
            </Container>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
