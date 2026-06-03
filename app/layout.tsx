import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Imersão Claude para Marketing — Kalidash",
  description:
    "Monte sua própria mini agência de marketing em 8 horas. Imersão presencial em Belo Horizonte, 18 de Julho.",
  openGraph: {
    title: "Imersão Claude para Marketing — Kalidash",
    description: "8 horas de pura engenharia operativa. BH, 18/07.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
