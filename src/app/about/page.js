import About from "@/components/sections/about";
import React from "react";

function page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full px-5 md:px-10 pb-24 md:pb-32">
        <About />
      </div>
    </div>
  );
}

export default page;
