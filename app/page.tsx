"use client";

import Hero from "@/components/Hero";
import Stories from "@/components/Stories";
import Footer from "@/components/Footer";
import LatestBlogs from "@/components/LatestBlogs";
import RecomendedSection from "@/components/RecomendedSection";
import SearchBox from "@/components/SearchBox";

export default function Home() {
  return (
    <main>
      <SearchBox />
      <div className="main-container">
        <Hero />
        <Stories />
        <LatestBlogs />
        <RecomendedSection />
        <Footer />
      </div>
    </main>
  );
}
