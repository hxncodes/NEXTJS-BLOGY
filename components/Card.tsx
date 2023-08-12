import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="">
      <div className="relative overflow-hidden">
        <img
          src="/images/blog1.jpg"
          alt="blog"
          className="rounded-3xl w-[100%] h-[100%]"
        />
        <div className="flex absolute bottom-2 left-3">
          <div className="w-10 h-10 rounded-full">
            <Image
              src="/images/author1.jpg"
              width={100}
              height={100}
              alt="author"
              className="border-4 border-lightGrayColor border-opacity-50 rounded-full"
            />
          </div>
          <div className="w-10 h-10 rounded-full">
            <Image
              src="/images/author2.jpg"
              width={100}
              height={100}
              alt="author"
              className="border-4 border-lightGrayColor border-opacity-50 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-1 py-2">
        <button className="btn btn-sm btn-secondary">Design</button>
        <button className="btn btn-sm btn-secondary">Idea</button>
        <button className="btn btn-sm btn-secondary">Review</button>
      </div>
      <div className="pb-2">
        <h4>
          <a className="text-2xl font-bold leading-tight" href="">
            New technology is not good or evil in and of itself
          </a>
        </h4>
        <p className="line-clamp-3 py-2">
          Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis
          sapien ornare. Sed at ante porta, ullamcorper massa euhyjbh tg hyuh,
        </p>
      </div>
    </div>
  );
};

export default Card;
