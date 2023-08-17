"use client";

import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import React, { useState } from "react";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  const [searchOpen, setSearchOpen] = useState<Boolean>(false);
  return (
    <>
      <SearchBox show={searchOpen} onClose={setSearchOpen} />
      <Navbar onClick={() => setSearchOpen(true)} />
      <main className="px-2 py-4">{children}</main>
    </>
  );
};

export default BlogLayout;
