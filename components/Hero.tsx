"use client";

import HeroTitle from "./HeroTitle";
import Subscribe from "./Subscribe";

const Hero = () => {
  return (
    <header>
      <HeroTitle
        title="Hey, we’re Blogy."
        subTitle=" See our thoughts, stories and
        ideas."
      />
      <div className="flex items-center lg:w-[90%] xl:w-[70%] gap-4">
        <Subscribe />
        <div className="hidden lg:flex lg:w-[50%]">
          <p className="text-base text-gray-600">
            Get the email newsletter and unlock access to members-only content
            and updates
          </p>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Hero;
