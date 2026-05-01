"use client";
import React from "react";
import Link from "next/link";

const Sidebar = ({ menu, setMenu, getCategoryCount }) => {
  const menuItemStyles = `cursor-pointer hover:underline font-main font-medium text-base text-black text-left`;
  return (
    <menu className="flex lg:flex-col gap-4">
      <ul>
        <li>
          Articles
          <ul className="mt-1 lg:pl-2">
            <li className="mb-2">
              <button
                onClick={() => setMenu("All")}
                className={`${menuItemStyles} ${menu === "All" ? " text-brand-orange" : ""}`}
              >
                All{" "}
                <span
                  className={`${menu === "All" ? " text-brand-orange" : "text-gray-500"}`}
                >
                  ({getCategoryCount("All")})
                </span>
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => setMenu("React")}
                className={`${menuItemStyles} ${menu === "React" ? " text-brand-orange" : ""}`}
              >
                React{" "}
                <span
                  className={`${menu === "React" ? " text-brand-orange" : "text-gray-500"}`}
                >
                  ({getCategoryCount("React")})
                </span>
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => setMenu("Node")}
                className={`${menuItemStyles} ${menu === "Node" ? " text-brand-orange" : ""}`}
              >
                Node.js{" "}
                <span
                  className={`${menu === "Node" ? " text-brand-orange" : "text-gray-500"}`}
                >
                  ({getCategoryCount("Node")})
                </span>
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => setMenu("Express")}
                className={`${menuItemStyles} ${menu === "Express" ? " text-brand-orange" : ""}`}
              >
                Express{" "}
                <span
                  className={`${menu === "Express" ? " text-brand-orange" : "text-gray-500"}`}
                >
                  ({getCategoryCount("Express")})
                </span>
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => setMenu("CSS")}
                className={`${menuItemStyles} ${menu === "CSS" ? " text-brand-orange" : ""}`}
              >
                CSS{" "}
                <span
                  className={`${menu === "CSS" ? " text-brand-orange" : "text-gray-500"}`}
                >
                  ({getCategoryCount("CSS")})
                </span>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </menu>
  );
};

export default Sidebar;
