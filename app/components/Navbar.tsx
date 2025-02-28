"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isTop ? "bg-transparent" : "bg-[var(--color-background)]"
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="relative flex items-center justify-center w-10 h-10">
          <h1 className="text-xl font-bold text-white transition duration-300 ease-in-out hover:scale-110 cursor-pointer no-underline">
            KR
          </h1>
          <div className="absolute inset-0 border border-white rounded-full"></div>
        </div>

        {/* Hamburger button - widoczny tylko na mobilnych */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-white text-2xl hover:text-[var(--color-accent)] focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-xl font-medium tracking-wide text-[var(--color-gray-dark)]">
          <li>
            <Link
              href="#hero"
              className="group relative transition duration-300 ease-in-out hover:text-[var(--color-accent)] no-underline"
            >
              Start
              <span className="absolute left-0 bottom-[-2px] h-[1px] w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="group relative transition duration-300 ease-in-out hover:text-[var(--color-accent)] no-underline"
            >
              Usługi
              <span className="absolute left-0 bottom-[-2px] h-[1px] w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="group relative transition duration-300 ease-in-out hover:text-[var(--color-accent)] no-underline"
            >
              O Mnie
              <span className="absolute left-0 bottom-[-2px] h-[1px] w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="group relative transition duration-300 ease-in-out hover:text-[var(--color-accent)] no-underline"
            >
              Projekty
              <span className="absolute left-0 bottom-[-2px] h-[1px] w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="group relative transition duration-300 ease-in-out hover:text-[var(--color-accent)] no-underline"
            >
              Kontakt
              <span className="absolute left-0 bottom-[-2px] h-[1px] w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Fullscreen mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#0a0e17] flex flex-col items-center justify-center animate-fadeIn">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white text-5xl focus:outline-none"
          >
            ×
          </button>
          <ul className="space-y-8 text-2xl text-white font-medium tracking-wide">
            <li>
              <Link
                href="#hero"
                onClick={() => setIsOpen(false)}
                className="hover:text-[var(--color-accent)] transition duration-300 no-underline"
              >
                Start
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                onClick={() => setIsOpen(false)}
                className="hover:text-[var(--color-accent)] transition duration-300 no-underline"
              >
                Usługi
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-[var(--color-accent)] transition duration-300 no-underline"
              >
                O Mnie
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="hover:text-[var(--color-accent)] transition duration-300 no-underline"
              >
                Projekty
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-[var(--color-accent)] transition duration-300 no-underline"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
