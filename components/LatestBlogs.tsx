import React from "react";
import Image from "next/image";
import Card from "./Card";

const LatestBlogs = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-row items-center justify-between mb-8">
        <h2 className="text-4xl sm:text-[3.35rem] md:text-6xl font-light">
          See what we’ve <br />
          <span className="break-all font-bold">written lately</span>
        </h2>
        <div className="hidden md:block">
          <div className="flex">
            <div className="flex -space-x-4">
              <a className="avatar" href="#">
                <Image
                  loading="lazy"
                  src="/images/author1.jpg"
                  width={100}
                  height={100}
                  alt="author"
                  className="rounded-full"
                />
              </a>
              <a className="avatar" href="#">
                <Image
                  loading="lazy"
                  src="/images/author2.jpg"
                  width={100}
                  height={100}
                  alt="author"
                  className="rounded-full"
                />
              </a>
              <a className="avatar" href="#">
                <Image
                  src="/images/author2.jpg"
                  width={100}
                  height={100}
                  alt="author"
                  className="rounded-full"
                />
              </a>
            </div>
          </div>
          <p className="text-right text-base text-gray-600 mt-2">
            Meet our top authors
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default LatestBlogs;
