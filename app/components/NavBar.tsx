"use client";
import Image from "next/image";
import leaf from "@/public/img/leaf-1.png";
import leaf2 from "@/public/img/leaf-2.png";
import { useEffect, useRef, useState } from "react";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const headerRef = useRef<HTMLElement>(null); // Ref for the header

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (!header) return;

      if (window.scrollY >= 50) {
        header.classList.add("border-b", "border-yellow-500");
      } else {
        header.classList.remove("border-b", "border-yellow-500");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header
      id="navbar"
      className="bg-green-950 fixed w-full top-0 left-0 z-50"
      ref={headerRef}
    >
      <nav className="container flex items-center justify-between h-16 sm:h-20">
        <div className="font-Lobster sm:text-2xl">IndorePlants.</div>
        <div
          id="nav-menu"
          className={`absolute top-0 left-[-100%] min-h-[80vh] w-full bg-green-950/80
          backdrop-blur-sm flex items-center justify-center duration-300 overflow-hidden lg:static
          lg:min-h-fit lg:bg-transparent lg:w-auto
          ${showMenu && "left-[0]"}`}
        >
          <ul className="flex flex-col items-center gap-8 lg:flex-row">
            <li>
              <a href="#home" className="nav-link" onClick={handleShowMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link" onClick={handleShowMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#popular" className="nav-link" onClick={handleShowMenu}>
                Popular
              </a>
            </li>
            <li>
              <a href="#review" className="nav-link" onClick={handleShowMenu}>
                Review
              </a>
            </li>
          </ul>
          <div className="absolute bottom-0 -right-10 opacity-90 lg:hidden">
            <Image src={leaf} alt="leaf_image" className="w-32" />
          </div>
          <div className="absolute -top-5 left-5 rotate-90 opacity-90 lg:hidden">
            <Image src={leaf2} alt="leaf_image" className="w-32" />
          </div>
        </div>

        <div
          className="text-xl sm:text-3xl cursor-pointer z-50 lg:hidden"
          onClick={handleShowMenu}
        >
          <i
            className={`${showMenu ? "ri-close-large-line" : "ri-menu-4-line"}`}
            id="hamburger"
          ></i>
        </div>
      </nav>
    </header>
  );
};
