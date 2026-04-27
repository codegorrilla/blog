"use client";

import { useState, useEffect } from "react";
import { ThemeContext } from "@/context";

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);

		//sync with Tailwind v4 selector
		if (newTheme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	//sync on initial load
	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
