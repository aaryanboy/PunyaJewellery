import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import GoldSilverPriceApi from "@/components/GoldSilverPriceApi";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gold&Silver",
  description: "Gold&Silver website ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>

      <body className={inter.className}>
        <Navbar/>
        {/* <GoldSilverPriceApi/> */}
        {children}
        <Footer/></body>
    </html>
  );
}
