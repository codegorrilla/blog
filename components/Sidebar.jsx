"use client";
import React from "react";

const Sidebar = ({ menu, setMenu }) => {
  return (
    <menu className="flex lg:flex-col gap-4">
      <ul>
        <li>Getting started</li>
        <li>
          Articles
          <ul className="lg:pl-2">
            <li>
              <button onClick={() => setMenu("All")}>All</button>
            </li>
            <li>
              <button onClick={() => setMenu("React")}>React</button>
            </li>
            <li>
              <button onClick={() => setMenu("Node")}>Node.js</button>
            </li>
            <li>
              <button onClick={() => setMenu("Expressjs")}>Express.js</button>
            </li>
            <li>
              <button onClick={() => setMenu("CSS")}>CSS</button>
            </li>
          </ul>
        </li>
      </ul>
    </menu>
  );
};

export default Sidebar;
