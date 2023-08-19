"use client";

import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import HeroTitle from "@/components/HeroTitle";
import LatestBlogs from "@/components/LatestBlogs";

const Blog = () => {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);
  return (
    <div>
      <HeroTitle
        title="Your own Blogy."
        subTitle=" Edit, Update or Delete your Blogs"
      />
      <LatestBlogs />
    </div>
  );
};

export default Blog;
