import { pubDate } from "@/utility/publishDate";
import fbShareIcon from "./fb-icon.png";
import art_pic_1 from "./article-thumb-1.png";
import art_pic_2 from "./article-thumb-2.png";
import art_pic_3 from "./article-thumb-3.png";

export const assets = {
  fbShareIcon,
};

export const blogData = [
  {
    id: 1,
    title: "React hooks: useMemo and useCallback",
    description: "how to use useMemo and useCallback hooks in React 19.",
    image: art_pic_1,
    date: pubDate("23/04/2026"),
    category: "React",
    author: "code.gorrilla",
  },
  {
    id: 2,
    title: "Tailwind: Implementing custom selectors",
    description:
      "tailwindcss provides an easy way to write user-defined custom selector names",
    image: art_pic_2,
    date: pubDate("25/04/2026"),
    category: "CSS",
    author: "sanjib",
  },
  {
    id: 3,
    title: "How to setup a Node server locally",
    description:
      "One of the basic learning starts about Node with setting up a local server",
    image: art_pic_3,
    date: pubDate("29/04/2026"),
    category: "Node",
    author: "code.gorrilla",
  },
  {
    id: 4,
    title: "Express.js 101",
    description: "Start with Express.js",
    image: art_pic_3,
    date: pubDate("24/04/2026"),
    category: "Expressjs",
    author: "code.gorrilla",
  },
  {
    id: 5,
    title: "React hooks: useLayoutEffect",
    description: "how to use useLayoutEffect hook in React 19.",
    image: art_pic_1,
    date: pubDate("28/04/2026"),
    category: "React",
    author: "code.gorrilla",
  },
];
