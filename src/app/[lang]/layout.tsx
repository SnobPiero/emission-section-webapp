import "reflect-metadata";

import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import { i18n, type Locale } from "@intl/i18n-config";

import "./globals.scss";

const dm = DM_Sans({ subsets: ["latin"] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Nuova Certificazione - pratico.it",
  description: "Task pratico.it",
};
