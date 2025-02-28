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
  title: "Karol Rembiasz - Portfolio",
  description:
    "Portfolio of Karol Rembiasz - Web & .NET developer, based in Poland. I specialize in building web applications and APIs using modern technologies.",
  openGraph: {
    title: "Karol Rembiasz - Portfolio",
    description: "Web & .NET developer specializing in modern web applications.",
    url: "https://karol-rembiasz-portfolio.vercel.app",
    siteName: "Karol Rembiasz Portfolio",
    images: [
      {
        url: "/miniatura.png", 
        width: 1200,
        height: 630,
        alt: "Miniatura portfolio Karola Rembiasza",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
