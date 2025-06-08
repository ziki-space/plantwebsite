"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export const ScrollUp = () => {
  const scrollUpRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollUpBtn = scrollUpRef.current;
      if (!scrollUpBtn) return;

      if (window.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
      } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <Link
      href="#"
      ref={scrollUpRef}
      className="fixed right-4 -bottom-1/2 bg-yellow-500 shadow-sm inline-block px-3 py-1 md:px-4 md:py-2 rounded-md text-lg z-50 hover:-translate-y-1 duration-3000"
    >
      <i className="ri-arrow-up-line"></i>
    </Link>
  );
};
