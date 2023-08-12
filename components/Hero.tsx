"use client";

import Subscribe from "./Subscribe";

const Hero = () => {
  return (
    <section>
      <div className="flex py-8 lg:py-14">
        <h1 className="text-4xl sm:text-[3.35rem] md:text-7xl lg:text-[5.5rem] font-light leading-tight">
          <span className="font-bold">Hey, we’re Blogy.</span> See our thoughts,
          stories and ideas.
        </h1>
      </div>
      <div className="flex items-center lg:w-[90%] xl:w-[70%] gap-4">
        <Subscribe />
        <div className="hidden lg:flex lg:w-[50%]">
          <p className="text-base text-gray-600">
            Get the email newsletter and unlock access to members-only content
            and updates
          </p>
        </div>
      </div>
      <hr className="h-px mt-20 bg-gray-300 border-0" />
    </section>
  );
};

export default Hero;
