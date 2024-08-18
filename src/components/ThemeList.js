import React from "react";

const ThemeList = () => {
  return (
    <>
      <div
        className="w-4 h-4 bg-[#000] rounded-full  md:w-6 md:h-6 2xl:w-8 xl:h-8"
        onClick={() => setTheme("classicBlackAndWhite")}
      ></div>
      <div
        className="w-4 h-4 bg-[#7b34d4] rounded-full md:w-6 md:h-6 2xl:w-8 xl:h-8"
        onClick={() => setTheme("twilightBliss")}
      ></div>
      <div
        className="w-4 h-4 bg-[#e44a40] rounded-full md:w-6 md:h-6 2xl:w-8 xl:h-8"
        onClick={() => setTheme("bloodMoon")}
      ></div>
      <div
        className="w-4 h-4 bg-[#428439] rounded-full md:w-6 md:h-6 2xl:w-8 xl:h-8"
        onClick={() => setTheme("rainforestExplore")}
      ></div>
      <div
        className="w-4 h-4 bg-[#12CEF7] rounded-full md:w-6 md:h-6 2xl:w-8 xl:h-8"
        onClick={() => setTheme("blessedAqua")}
      ></div>
      <div
        className="w-4 h-4 bg-[#fff] rounded-full md:w-6 md:h-6 2xl:w-8 xl:h-8"
        onClick={() => setTheme("classicWhiteAndBlack")}
      ></div>
    </>
  );
};

export default ThemeList;
