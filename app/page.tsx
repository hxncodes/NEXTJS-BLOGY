"use client";

import Hero from "@/components/Hero";
import Stories from "@/components/Stories";
import Footer from "@/components/Footer";
import LatestBlogs from "@/components/LatestBlogs";
import RecomendedSection from "@/components/RecomendedSection";
import SearchBox from "@/components/SearchBox";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState<Boolean>(false);
  return (
    <main>
      <SearchBox show={searchOpen} onClose={setSearchOpen} />
      <div className="main-container">
        <Navbar onClick={() => setSearchOpen(true)} />
        <Hero />
        <Stories />
        <LatestBlogs />
        <RecomendedSection />
        <Footer />
      </div>
    </main>
  );
}
