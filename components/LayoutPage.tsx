"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LayoutPage = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [route, setRoute] = useState("");

  useEffect(() => {
    setRoute(pathname);
  }, [pathname]);

  return (
    <div className="flex w-full justify-between items-center max-w-3xl">
      <div className="flex items-center justify-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-arrow-left text-white hover:cursor-pointer"
          onClick={() => (route === "/" ? router.refresh() : router.back())}
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M16 12H8" />
          <path d="m12 8-4 4 4 4" />
        </svg>

        <h1 className="text-2xl text-orange-500 tracking-wider">
          {route === "/" ? "/home" : route.toLowerCase()}
        </h1>
      </div>
      <h1 className="text-white text-4xl font-bold">
        dev
        <span className="font-bold text-orange-500">Doubts</span>
      </h1>
    </div>
  );
};

export default LayoutPage;
