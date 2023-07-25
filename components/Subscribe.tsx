"use client";

import React from "react";

const Subscribe = () => {
  return (
    <form action="">
      <div className="flex rounded-full bg-lightGrayColor hover:bg-darkGrayColor">
        <div>
          <input
            className="outline-none w-full h-full bg-lightGrayColor rounded-full text-xl hover:bg-darkGrayColor font-light px-5"
            type="email"
            required
            placeholder="Your email address"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default Subscribe;
