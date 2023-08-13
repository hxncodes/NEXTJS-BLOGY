"use client";

import Hero from "@/components/Hero";
import Stories from "@/components/Stories";
import Footer from "@/components/Footer";
import LatestBlogs from "@/components/LatestBlogs";
import RecomendedSection from "@/components/RecomendedSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stories />
      <LatestBlogs />
      <RecomendedSection />
      <Footer />
    </main>
  );
}
