"use client";

import BlogCard from "./BlogCard";

const Stories = () => {
  return (
    <div className="py-4">
      <h2 className="text-xl">
        Get started with our <span className="font-bold">best stories</span>
      </h2>
      <div className="flex flex-row gap-4 overflow-visible overflow-x-scroll py-2 mr-[-50px]">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <hr />
    </div>
  );
};

export default Stories;
