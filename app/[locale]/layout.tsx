import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
// Components
import { Background, Container, Header, Providers, Sidebar } from "@/shared/components";

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function AppLayout({ children, params }: Props): Promise<React.ReactElement> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Background />
        <Container>
          <Sidebar />
          <Header>{children}</Header>
        </Container>
      </Providers>
    </NextIntlClientProvider>
  );
}
