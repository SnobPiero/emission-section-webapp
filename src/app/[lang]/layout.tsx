import "reflect-metadata";

import type { Metadata } from "next";

import { i18n, type Locale } from "@intl/i18n-config";

import "./globals.scss";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale,
    variable: "--font-work-sans",
  }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html className={inter.className} lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Nuova Certificazione - pratico.it",
  description: "Task pratico.it",
};
