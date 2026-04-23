import React from "react";
import AnimatedMenuIcon from "./AnimatedMenuIcon";

const Header = () => {
  return (
    <header className="w-full py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <h1 className="font-main text-[2.5rem] font-black text-brand-blue dark:text-brand-orange tracking-tighter">
          code.gorrilla
        </h1>
        <AnimatedMenuIcon />
      </div>
    </header>
  );
};

export default Header;
