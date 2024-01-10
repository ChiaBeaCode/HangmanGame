"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../style/logo.png";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

//TODO: shorten heigh
//TODO: change color
//TODO: remove logo?
export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState<Boolean>(false);

  // function toggleProjectMenu() {
  //   console.log(`First: ${menuOpen}`);
  //   setMenuOpen(!menuOpen)
  //   console.log(`Second: ${menuOpen}`);

  // }

  return (
    <nav className="navbar flex flex-row h-fit py-2 md:h-20 m-auto mb-1 md:mb-12 text-xl px-4 md:px-8 bg-gradient-to-bl from-[#e1a95f] to-[#cc7722] drop-shadow-[0_8px_3px_rgba(0,0,0,0.25)]">
      <div className="flex justify-start">
        <Link href="/">
          <Image
            src={logo}
            alt="ChiaBeaCode logo"
            className="w-14 md:w-16 h-auto border-4 rounded-2xl border-overcast-200"
          ></Image>
        </Link>
      </div>
      <div className=" flex justify-center m-auto text-5xl text-white">
        {" "}
        Hangman
      </div>
      {/* <div className="block space-x-9 md:space-x-20 text-misty-600">
        <a
          id="home"
          href={"/"}
          className="text-white inline-block after:block after:content-[''] after:w-0 after:h-1 after:m-auto after:rounded-sm after:bg-misty-100 after:duration-500 hover:after:w-full md:text-2xl"
        >
          Home
        </a>
        <a
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white inline-block after:block after:content-[''] after:w-0 after:h-1 after:m-auto after:rounded-sm after:bg-misty-100 after:duration-500 hover:after:w-full md:text-2xl"
        >
          <span className=" flex flex-row">
            Projects{" "}
            {menuOpen ? (
              <FaCaretDown className=" mt-1 ml-2" />
            ) : (
              <FaCaretUp className=" mt-1 ml-2" />
            )}
          </span>
        </a>
      </div> */}
    </nav>
  );
}
