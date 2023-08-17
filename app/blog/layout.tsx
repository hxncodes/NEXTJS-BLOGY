"use client";

import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import React, { useState } from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const [searchOpen, setSearchOpen] = useState<Boolean>(false);
  return (
    <>
      <SearchBox show={searchOpen} onClose={setSearchOpen} />
      <Navbar onClick={() => setSearchOpen(true)} />
      <main className="main-container py-8 lg:py-14">{children}</main>
    </>
  );
};

export default ProtectedLayout;
