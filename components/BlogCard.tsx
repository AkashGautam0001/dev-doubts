import Link from "next/link";
import React from "react";
const TechWrapper = ({ tech }: { tech: string }) => {
  return (
    <div className="text-orange-500 px-2 py-0.5 m-1 text-base ">{tech}</div>
  );
};
const BlogCard = ({ title, description, tags, time, links, slug }: any) => {
  return (
    <div className="max-w-3xl bg-black mx-2 p-2 w-full  transition-all duration-300 ease-in-out wave-effect">
      <div className="p-1 px-2">
        {/* <h1 className="text-gray-400 text-lg pl-14">{time}</h1> */}

        <div className="flex justify-start items-start">
          {/* <div >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-red-600 w-24"
            >
              <path d="M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z" />
              <path d="M14.12 3.88 16 2" />
              <path d="M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5" />
              <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
              <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
              <path d="M6 13H2" />
              <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
              <path d="m8 2 1.88 1.88" />
              <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
            </svg>
          </div> */}
          <h1 className="text-3xl text-gray-300">{title}</h1>
        </div>
        <div className="flex gap-1 mt-5 items-center hover:translate-x-4 transition-all duration-200 ease-in-out">
          <Link
            href={`/blogs/${slug}`}
            className="text-amber-400 text-xl font-bold hover:underline"
          >
            Read More
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-fast-forward text-white ml-2 "
          >
            <polygon points="13 19 22 12 13 5 13 19" />
            <polygon points="2 19 11 12 2 5 2 19" />
          </svg>
        </div>
      </div>
      <div className="h-0.5 bg-gray-500 rounded-full" />
      <div className="flex flex-wrap gap-x-4 mb-2 items-center justify-end ">
        {["Next.js", "React-Native"].map((tech) => (
          <TechWrapper tech={tech} />
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
