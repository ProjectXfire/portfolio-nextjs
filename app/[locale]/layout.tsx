import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
// Components
import { Background, Container, Header, Providers, Sidebar } from '@/shared/components';

export default async function AppLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <Providers attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <NextIntlClientProvider messages={messages}>
        <Background />
        <Container>
          <Sidebar />
          <Header>{children}</Header>
        </Container>
      </NextIntlClientProvider>
    </Providers>
  );
}
