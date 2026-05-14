import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "이음네트웍스글로벌 | Eum Networks Global",
  description:
    "스포츠와 IT의 경계를 넘어 새로운 비즈니스 가치를 창출하는 이음네트웍스글로벌. 브라더스포츠아카데미, 유소년야구단, 야구용품, 금융IT.",
  keywords:
    "이음네트웍스글로벌,브라더스포츠아카데미,유소년야구단,야구용품,금융IT,이음시스템즈",
  openGraph: {
    title: "이음네트웍스글로벌 | Eum Networks Global",
    description: "스포츠와 IT의 경계를 넘어 새로운 비즈니스 가치를 창출합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
