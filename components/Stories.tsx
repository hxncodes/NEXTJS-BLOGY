"use client";

import Card from "./Card";
import { blogs } from "@/data/blog";

const Stories = () => {
  return (
    <div className="py-4">
      <h2 className="text-xl">
        Get started with our <span className="font-bold">best stories</span>
      </h2>
      <div className="flex flex-row gap-4 overflow-visible overflow-x-scroll py-2 mr-[-50px]">
        {blogs.map((blog) => (
          <div className="w-[38%] md:w-[28%] flex flex-col shrink-0">
            <Card
              title={blog.title}
              description={blog.description}
              imageURL={blog.imageURL}
              tags={blog.tags}
              authors={blog.authors}
            />
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Stories;
