"use client";

import SearchBox from "@/components/SearchBox";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogy",
  description: "Blogy app is created with NextJS for my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchOpen, setSearchOpen] = useState<Boolean>(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchBox show={searchOpen} onClose={setSearchOpen} />
        <Navbar onClick={() => setSearchOpen(true)} />
        {children}
      </body>
    </html>
  );
}
