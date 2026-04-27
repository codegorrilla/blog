"use client";
import React, { useState } from "react";

const Sidebar = () => {
	const [menu, setMenu] = useState("All");

	return (
		<menu className='flex lg:flex-col gap-4'>
			<ul>
				<li>Getting started</li>
				<li>
					Articles
					<ul>
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
							<button onClick={() => setMenu("Express")}>Express.js</button>
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
