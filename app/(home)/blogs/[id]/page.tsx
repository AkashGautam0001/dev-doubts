import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="">
        <div className="flex gap-4 items-center">
          <span className="text-amber-400 text-3xl font-bold">
            Original Website
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-trending-up text-red-600 "
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>{" "}
        </div>

        <a
          href="https://thewebivore.com/understanding-npm-dependency-installation-errors/"
          className="text-white text-[22.5px] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://thewebivore.com/understanding-npm-dependency-installation-errors/
        </a>

        <iframe
          src="https://thewebivore.com/understanding-npm-dependency-installation-errors/"
          className="w-full h-screen mt-6"
          title="Example Iframe"
        />
      </div>
    </div>
  );
};

export default page;
