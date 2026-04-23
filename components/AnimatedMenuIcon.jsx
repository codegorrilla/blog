"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import {
  BsFillMoonFill,
  BsFillSunFill,
  BsFillInfoSquareFill,
  BsMailbox2Flag,
  BsDiscord,
  BsGithub,
  BsTwitterX,
} from "react-icons/bs"; // Icons for menus
import Link from "next/link";
import { useTheme } from "@/hook/useTheme";

const AnimatedMenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const circleRef = useRef(null);
  const filterRef = useRef(null);
  const menuRef = useRef(null);
  const itemsRef = useRef([]);

  const { theme, toggleTheme } = useTheme();

  //when the cursor hovers over the SVG shape
  const handleMouseEnter = () => {
    // Animate the "turbulence" scale to create a morphing pattern effect
    gsap.to(filterRef.current, {
      attr: { baseFrequency: 0.05 }, // Higher frequency creates more detail
      duration: 1,
      ease: "power2.out",
    });
  };

  //when moving the cursor away from the SVG shape
  const handleMouseLeave = () => {
    gsap.to(filterRef.current, {
      attr: { baseFrequency: 0 }, // Returns to solid shape
      duration: 0.6,
      ease: "power2.inOut",
    });
  };

  //toggling the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      // 1. Animate Blue Shape (Pattern change)
      gsap.to(filterRef.current, {
        attr: { baseFrequency: 0.05 },
        duration: 0.8,
      });

      // 2. Open Menu & Stagger Items
      gsap.to(menuRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        ease: "power3.out",
      });

      gsap.fromTo(
        itemsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.7)",
          delay: 0.1,
        },
      );
    } else {
      // Reset animations
      gsap.to(filterRef.current, { attr: { baseFrequency: 0 }, duration: 0.4 });
      gsap.to(menuRef.current, { autoAlpha: 0, y: -10, duration: 0.3 });
    }
  };

  const menuItems = [
    {
      name: theme === "dark" ? "Switch to Light" : "Switch to Dark",
      type: "toggle",
      icon:
        theme === "dark" ? (
          <BsFillMoonFill size={18} />
        ) : (
          <BsFillSunFill size={18} />
        ),
    },
    {
      name: "About",
      type: "link",
      href: "/about",
      icon: <BsFillInfoSquareFill size={18} />,
    },
    {
      name: "Contact",
      type: "link",
      href: "/contact",
      icon: <BsMailbox2Flag size={18} />,
    },
    {
      name: "Github",
      type: "link",
      href: "https://github.com",
      icon: <BsGithub size={18} />,
    },
    {
      name: "Discord",
      type: "link",
      href: "https://discord.com",
      icon: <BsDiscord size={18} />,
    },
    {
      name: "X",
      type: "link",
      href: "https://twitter.com",
      icon: <BsTwitterX size={18} />,
    },
  ];

  return (
    <div className="relative p-8 px-0">
      <button
        className="cursor-pointer p-4 w-fit relative z-50 focus:outline-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={toggleMenu}
      >
        <svg width="45" height="45" viewBox="0 0 60 60">
          <defs>
            <filter id="morphFilter">
              <feTurbulence
                ref={filterRef}
                type="fractalNoise"
                baseFrequency="0"
                numOctaves="3"
                result="noise"
              />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" />
            </filter>
          </defs>

          {/* The Blue Underlying Shape */}
          <circle
            ref={circleRef}
            cx="30"
            cy="30"
            r="28"
            fill={theme === "dark" ? "#f0493a" : "#2204ba"}
            filter="url(#morphFilter)"
          />

          {/* The Hamburger Lines */}
          <g fill="white" className="transition-transform duration-300">
            {isOpen ? (
              <path
                d="M20 20 L40 40 M40 20 L20 40"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            ) : (
              <rect x="15" y="22" width="30" height="3" rx="1.5" />
            )}
            {!isOpen && <rect x="15" y="35" width="30" height="3" rx="1.5" />}
          </g>
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        className="invisible opacity-0 absolute top-24 right-5 w-64  bg-brand-blue border-white dark:bg-brand-orange dark:border-brand-orange rounded-2xl shadow-2xl border overflow-hidden z-40"
      >
        <ul className="flex flex-col p-2">
          {menuItems.map((item, i) => {
            //logic for the list item content
            const content = (
              <>
                <span className="text-white">{item.icon}</span>
                {item.name}
              </>
            );

            const className =
              "flex items-center gap-3 px-4 py-3 rounded cursor-pointer text-white hover:bg-brand-orange hover:rounded-2xl dark:text-brand-white dark:hover:bg-brand-blue dark:hover:rounded-2xl transition-colors font-medium";

            return (
              <li
                key={item.name}
                ref={(el) => {
                  if (el) itemsRef.current[i] = el;
                }}
              >
                {item.type === "toggle" ? (
                  <button
                    onClick={toggleTheme}
                    className={`${className} w-full`}
                  >
                    {content}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={className}
                    onClick={() => setIsOpen(false)}
                  >
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AnimatedMenuIcon;
