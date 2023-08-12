"use client";

import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between pt-7">
      <Logo />
      <div className="hidden lg:flex items-center gap-4">
        <div className="text-lg font-medium">
          <ul className="flex gap-4">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Recen Post</Link>
            </li>
            <li>
              <Link href="#">Membership</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-secondary btn-icon">
            <BsSearch />
            Search
          </button>
          <button className="btn btn-primary">Join</button>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-center lg:hidden text-2xl">
        <BsSearch />
        <GiHamburgerMenu className="text-4xl" />
      </div>
    </div>
  );
};

export default Navbar;
