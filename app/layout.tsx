import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.matrisnegar.ir"),
  title: { default: "داده نگار ماتریس | نرم‌افزارهای راهبردی مالی و اداری", template: "%s | داده نگار ماتریس" },
  description: "معرفی راهکارهای نرم‌افزاری مالی، اداری و دانشگاهی شرکت داده نگار ماتریس.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "fa_IR", siteName: "داده نگار ماتریس" },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased">
        <a className="skip-link" href="#main">پرش به محتوای اصلی</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
