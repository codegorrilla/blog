"use client";
import React, { useRef, useEffect } from "react";

const HeroText = () => {
  const setDaytime = useRef("morning");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setDaytime.current = "morning";
    } else if (hour >= 12 && hour < 18) {
      setDaytime.current = "afternoon";
    } else {
      setDaytime.current = "evening";
    }
  }, []);

  return (
    <h1 className="font-accent text-[2rem] leading-tight text-brand-yellow">
      <span className="text-brand-blue">
        <strong className="capitalize text-brand-orange" ref={setDaytime}>
          {setDaytime.current}!
        </strong>{" "}
        welcome to my journal,
      </span>{" "}
      here I document everything that I learn regarding web development, so that
      the information can be handy for aspiring developers like me.👍
    </h1>
  );
};

export default HeroText;
