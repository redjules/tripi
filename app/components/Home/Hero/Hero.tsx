import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-[120vh] sm:h-[100vh]">
      <div className="absolute top-0 left-0 w-full h-full bg-blue-950 opacity-70"></div>
      <video
        src="/images/hero1.mp4"
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-full obj-cover"
      />
    </div>
  );
};

export default Hero;
