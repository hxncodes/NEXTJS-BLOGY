import React from "react";
import Image from "next/image";
import Card from "./Card";
import { blogs } from "@/data/blog";
import { authors } from "@/data/authors";
import Avatar from "./Avatar";

const LatestBlogs = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="w-full flex flex-row items-center justify-between mb-8">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light">
          See what we’ve <br />
          <span className="break-all font-bold">written lately</span>
        </h2>
        <div className="hidden md:block">
          <div className="flex">
            <div className="flex -space-x-4">
              {authors.map((author) => (
                <Avatar key={author.id} imageUrl={author.avatar} />
              ))}
            </div>
          </div>
          <p className="text-right text-base text-gray-600 mt-2">
            Meet our top authors
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            title={blog.title}
            description={blog.description}
            imageURL={blog.imageURL}
            tags={blog.tags}
            authors={blog.authors}
          />
        ))}
      </div>
      <div className="py-8">
        <button className="btn btn-primary btn-md lg:btn-lg">Load more</button>
      </div>
      <hr />
    </section>
  );
};

export default LatestBlogs;
