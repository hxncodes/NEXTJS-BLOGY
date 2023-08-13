"use client";

import BlogCard from "./BlogCard";
import Card from "./Card";

const Stories = () => {
  return (
    <div className="py-4">
      <h2 className="text-xl">
        Get started with our <span className="font-bold">best stories</span>
      </h2>
      <div className="flex flex-row gap-4 overflow-visible overflow-x-scroll py-2 mr-[-50px]">
        <div className="w-[38%] md:w-[28%] flex flex-col shrink-0">
          <Card />
        </div>
        <div className="w-[38%] md:w-[28%] flex flex-col shrink-0">
          <Card />
        </div>
        <div className="w-[38%] md:w-[28%] flex flex-col shrink-0">
          <Card />
        </div>
        <div className="w-[38%] md:w-[28%] flex flex-col shrink-0">
          <Card />
        </div>
        <div className="w-[38%] md:w-[28%] flex flex-col shrink-0">
          <Card />
        </div>
        <div className="w-[38%] md:w-[28%] flex flex-col shrink-0">
          <Card />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Stories;
