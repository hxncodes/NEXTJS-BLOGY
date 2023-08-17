import React from "react";

interface Props {
  title: string;
  subTitle: string;
}

const HeroTitle = ({ title, subTitle }: Props) => {
  return (
    <div className="flex py-8 lg:py-14">
      <h1 className="text-4xl sm:text-[3.35rem] md:text-7xl lg:text-[5.5rem] font-light leading-tight">
        <span className="font-bold">{title}</span>
        {subTitle}
      </h1>
    </div>
  );
};

export default HeroTitle;
