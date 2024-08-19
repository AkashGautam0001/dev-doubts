import BlogCard from "@/components/BlogCard";
import React from "react";

const page = () => {
  const currenttime = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long", // Options: 'short', 'long', 'narrow'
    day: "numeric",
  });
  return (
    <div className="relative w-full h-3/4 flex flex-col justify-center items-center bg-black space-y-4">
      <BlogCard
        key={1}
        title="Understanding npm 'Could not resolve dependency' installation errors"
        links="https://thewebivore.com/understanding-npm-dependency-installation-errors/"
        time={currenttime}
        slug={"Could not resolve dependency".split(" ").join("-")}
      />

      <BlogCard
        key={2}
        title="AlternativeTo is a free service that helps you find better alternatives."
        links="https://alternativeto.net/"
        time={currenttime}
        slug={"open source alternative software".split(" ").join("-")}
      />
    </div>
  );
};
export default page;
