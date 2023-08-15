"use client";

import Card from "./Card";
interface Props {
  title: string;
  description: string;
  imageURL: string;
  tags: [string];
  authors: Object[];
}
const BlogCard = ({ title, description, imageURL, tags, authors }: Props) => {
  return (
    <div className="w-[38%] md:w-[28%] flex flex-col shrink-0">
      <Card
        title={title}
        description={description}
        imageURL={imageURL}
        tags={tags}
        authors={authors}
      />
    </div>
  );
};

export default BlogCard;
