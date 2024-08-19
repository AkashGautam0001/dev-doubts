"use client";
import LayoutPage from "@/components/LayoutPage";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="sticky top-0 w-full h-24 z-20 flex justify-center items-center backdrop-blur-3xl">
        <LayoutPage />
      </div>
      <div className="">{children}</div>
    </>
  );
};

export default layout;
