import React from "react";
import AnimatedMenuIcon from "./AnimatedMenuIcon";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full py-0 px-4 md:px-12 md:py-5 lg:px-28">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="font-main text-[2.5rem] font-black text-brand-blue dark:text-brand-orange tracking-tighter">
            code.gorrilla{" "}
            <span className="text-brand-orange text-lg lowercase tracking-tight">
              | blog
            </span>
          </h1>
        </Link>
        <AnimatedMenuIcon />
      </div>
    </header>
  );
};

export default Header;
