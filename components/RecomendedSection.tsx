import React from "react";
import Card from "./Card";
import Subscribe from "./Subscribe";

const RecomendedSection = () => {
  return (
    <section className="flex flex-col my-3">
      <h3 className="text-xl font-bold">Recommended</h3>

      <div className="grid  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between my-8">
        <div className="mb-4">
          <h2 className="text-3xl md:text-5xl font-light">
            Subscribe to <span className="font-bold">new posts</span>
          </h2>
        </div>
        <Subscribe />
      </div>
      <hr />
    </section>
  );
};

export default RecomendedSection;