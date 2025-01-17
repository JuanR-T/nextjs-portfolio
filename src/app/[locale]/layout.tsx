import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from "next-intl/server";
import { Montserrat, Roboto_Serif } from "next/font/google";
import { notFound } from "next/navigation";
import { twMerge } from "tailwind-merge";
import "../globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const roboto = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Juan R. T.",
  description: "Portfolio of Juan R.T, a full-stack developer.",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html data-theme="light" lang={locale}>
      <body
        className={twMerge(roboto.variable, montserrat.variable, "antialiased font-sans")}
      >
        <NextIntlClientProvider messages={messages}>
          <link rel="icon" href="/juan-memoji.png" sizes="any" />
          {children}
        </NextIntlClientProvider>
      </body>
    </html >
  );
}
