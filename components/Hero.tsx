"use client";

import Subscribe from "./Subscribe";

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
        <Subscribe />
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
