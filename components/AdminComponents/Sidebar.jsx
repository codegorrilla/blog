import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-slate-100 p-4">
      <div className="px-2 sm:pl-14 py-3">
        <Link href="/">
          <h1 className="font-main text-[2.5rem] font-black text-brand-blue dark:text-brand-orange tracking-tighter">
            code.gorrilla{" "}
            <span className="text-brand-orange text-lg lowercase tracking-tight">
              | admin
            </span>
          </h1>
        </Link>
      </div>
      <div className="w-28 sm:w-80 h-screen relative py-12 border border-black">
        <Link
          href="/admin/addPost"
          className="flex items-center border-b border-black gap-3 font-main font-medium px-3 py-2 bg-white shadow-[-5px 5px 0px 0px #000000]"
        >
          Add Blogs
        </Link>
        <Link
          href="/admin/blogList"
          className="flex items-center border-b border-black gap-3 font-main font-medium px-3 py-2 bg-white"
        >
          Blog List
        </Link>
        <Link
          href="/admin/subscriptions"
          className="flex items-center border-b border-black gap-3 font-main font-medium px-3 py-2 bg-white "
        >
          Subscriptions
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
