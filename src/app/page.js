import SplashCursor from "@/components/cursor";
import ASCIIText from "@/components/text";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <ASCIIText text="Colorful" enableWaves={true} asciiFontSize={4} />
      </div>
      <SplashCursor />
    </div>
  );
};

export default page;
