"use client";

import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between pt-7">
      <Logo />
      <div className="flex items-center gap-4">
        <div className="text-lg font-medium">
          <ul className="flex gap-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Recen Post</a>
            </li>
            <li>
              <a href="#">Membership</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-secondary btn-icon">
            <BsSearch />
            Search
          </button>
          <button className=" btn btn-primary">Join</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
