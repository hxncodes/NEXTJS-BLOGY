"use client";

import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="flex py-14">
        <h1 className="text-[92px] font-light leading-tight">
          <span className="font-bold">Hey, we’re Blogy.</span> See our thoughts,
          stories and ideas.
        </h1>
      </div>
      <div className="flex items-center w-[70%] gap-4 mb-16">
        <div className="flex w-[50%] rounded-full bg-lightGrayColor hover:bg-darkGrayColor">
          <div>
            <input
              className="outline-none w-full h-full bg-lightGrayColor rounded-full text-xl hover:bg-darkGrayColor font-light px-5"
              type="text"
              placeholder="Your email address"
            />
          </div>
          <button className="btn btn-primary btn-lg">Subscribe</button>
        </div>
        <div className="w-[50%]">
          <p className="text-base text-gray-600">
            Get the email newsletter and unlock access to members-only content
            and updates
          </p>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Hero;
