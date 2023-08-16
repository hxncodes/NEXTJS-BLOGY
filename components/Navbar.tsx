"use client";

import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "./Logo";
import Link from "next/link";
import { navLinks } from "@/data/links";
import { useState } from "react";

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Navbar = ({ onClick }: Props) => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap pt-7">
      <div className="mr-6 lg:mr-72">
        <Logo />
      </div>

      <div className="flex gap-4 lg:hidden">
        <button className="text-3xl" onClick={onClick}>
          <BsSearch />
        </button>
        <button onClick={() => setIsOpen(!isOpen)} className="">
          <GiHamburgerMenu
            className={`text-4xl ${isOpen ? "hidden" : "inline"}`}
          />

          <AiOutlineClose
            className={`text-4xl ${isOpen ? "inline" : "hidden"}`}
          />
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-lg font-medium w-full pr-4 flex justify-end">
          <ul className="block lg:flex gap-4">
            {navLinks.map(({ url, name }) => (
              <li className="mt-4 lg:mt-0" key={name}>
                <Link href={url}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex gap-2">
          <button className="btn btn-secondary btn-icon" onClick={onClick}>
            <BsSearch />
            Search
          </button>
          <button className="btn btn-primary">Join</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
