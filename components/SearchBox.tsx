"use client";

import { AiOutlineClose } from "react-icons/ai";

interface Props {
  show: Boolean;
  onClose: (arg: Boolean) => void;
}

const SearchBox = ({ show, onClose }: Props) => {
  return (
    <div
      style={{ transform: show ? "translateY(0%)" : "translateY(-200%)" }}
      className="flex w-full h-full items-center flex-col bg-gray-900 bg-opacity-75 fixed top-0 z-10 transition-all duration-500"
    >
      <div className="flex w-full items-center justify-between h-28 md:h-36 px-5 bg-white">
        <div className="flex flex-col w-[95%]">
          <input
            className="outline-none text-3xl md:text-5xl font-bold placeholder-black"
            type="text"
            required
            placeholder="Search"
          />
          <p className="text-base text-gray-600 mt-2">
            Please enter at least 3 characters
          </p>
        </div>
        <button
          className="text-4xl"
          onClick={() => {
            onClose(false);
          }}
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
