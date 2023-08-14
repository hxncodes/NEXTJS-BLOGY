import { SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  show: Boolean;
  onClose: (arg: Boolean) => SetStateAction<Boolean>;
}

const SearchBox = ({ show, onClose }: Props) => {
  return (
    <div
      style={{ transform: show ? "translateY(0%)" : "translateY(-200%)" }}
      className="flex w-full h-full items-center flex-col bg-gray-900 bg-opacity-75 absolute top-0 z-10 overflow-y-hidden"
    >
      <div className="flex flex-col w-full justify-center h-40 px-5 bg-white">
        <div className="flex">
          <input
            className="outline-none w-[98%] text-5xl font-bold placeholder-black"
            type="text"
            required
            placeholder="Search"
          />
          <button
            className="text-4xl"
            onClick={() => {
              onClose(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
        <p className="text-base text-gray-600 mt-2">
          Please enter at least 3 characters
        </p>
      </div>
    </div>
  );
};

export default SearchBox;
