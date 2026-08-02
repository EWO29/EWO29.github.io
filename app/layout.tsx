import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { COMPANY } from "@/data/company";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: `${COMPANY.name} — металлопрокат и трубы оптом`,
  description:
    "Поставка стальных бесшовных труб со склада в Екатеринбурге. Отгрузка от одной тонны, резка в размер, доставка по России.",
  // Демо-версия: закрыта от поисковиков, чтобы не подменять собой
  // официальный сайт компании. Снять перед боевым запуском.
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-zinc-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
