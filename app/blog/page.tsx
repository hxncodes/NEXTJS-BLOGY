"use client";

import HeroTitle from "@/components/HeroTitle";
import LatestBlogs from "@/components/LatestBlogs";
import React from "react";

const Blog = () => {
  return (
    <div>
      <HeroTitle
        title="Your own Blogy."
        subTitle=" Edit, Update or Delete your Blogs"
      />
      <LatestBlogs />
    </div>
  );
};

export default Blog;
