import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiêu đề SEO của bạn",
  description: "Mô tả ngắn để hiển thị khi share link.",
  openGraph: {
    title: "Tiêu đề OG",
    description: "Mô tả OG",
    url: window.location.href,
    siteName: "Tên website",
    images: [
      {
        url: "https://fastly.picsum.photos/id/111/1200/630.jpg?hmac=PKIusysOSgX0l3rGBPJCcVzPsUm-YvaqJQaUs5hLW-A",
        width: 1200,
        height: 630,
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
