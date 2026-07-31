import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "ТрубДемо — металлопрокат и трубы оптом",
  description:
    "Поставка стальных, профильных и водогазопроводных труб со склада. Отгрузка от одной тонны, доставка по России.",
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
      </body>
    </html>
  );
}
