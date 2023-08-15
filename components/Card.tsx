import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  title: string;
  description?: string;
  imageURL: string;
  tags?: string[];
  authors: any;
}

const Card = ({ title, description, imageURL, tags, authors }: Props) => {
  return (
    <div className="">
      <div className="relative overflow-hidden">
        <img
          src={imageURL}
          alt="blog"
          className="rounded-3xl w-[100%] h-[100%]"
        />
        <div className="flex absolute bottom-2 left-3">
          {authors?.map((author: { avatar: string }) => (
            <Link className="w-10 h-10 rounded-full" href={"#"}>
              <Image
                src={author.avatar}
                width={100}
                height={100}
                alt="author"
                className="border-4 border-lightGrayColor border-opacity-50 rounded-full"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-1 py-2">
        {tags?.map((tag) => (
          <button className="btn btn-sm btn-secondary">{tag}</button>
        ))}
      </div>
      <div className="pb-2">
        <h4>
          <a className="text-2xl font-bold leading-tight" href="">
            {title}
          </a>
        </h4>
        <p className="line-clamp-3 py-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
