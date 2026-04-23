import localFont from "next/font/local";
import ThemeProvider from "@/provider/ThemeProvider";

const avantGardeDemi = localFont({
  src: "../public/fonts/AVGARDD_2.woff",
  variable: "--font-avantGarde",
});

const satoshiVariable = localFont({
  src: "../public/fonts/Satoshi-Variable.woff2",
  style: "normal",
  variable: "--font-satoshi",
  display: "swap",
});

import "./globals.css";

export const metadata = {
  title: "CodeGorrilla Blog App",
  description: "Official Blog App for CodeGorrilla",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${satoshiVariable.variable} ${avantGardeDemi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
