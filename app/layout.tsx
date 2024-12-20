import type { Metadata } from "next";
import { workSans } from "./fonts";
import Link from "next/link";
import "./globals.css";


export const metadata: Metadata = {
  title: "KKR Technologies",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.className} font-normal flex flex-col w-screen h-screen p-8 gap-6 overflow-x-hidden`}
      >
        <header className="flex items-center justify-center gap-4 fixed top-0 left-0 p-8 bg-opacity-50 backdrop-blur-xl w-full">
          <Link href="/" >Home</Link>
          <Link href="/about" >About</Link>
          <Link href="/contact" >Contact</Link>
        </header>
        <main className="flex-1 mt-16">
          {children}
        </main>
        <footer className="flex items-center justify-center">
          <h1>&copy; All rights reserved.</h1>
        </footer>
      </body>
    </html>
  );
}
