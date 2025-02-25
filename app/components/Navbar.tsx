"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white z-50 transition-all duration-500 ease-in-out">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="relative flex items-center justify-center w-10 h-10">
          <h1 className="text-xl font-bold text-white transition duration-300 ease-in-out hover:text-blue-400 cursor-pointer">
            KR
          </h1>
          <div className="absolute inset-0 border border-white rounded-full"></div>
        </div>
        <button
          className="md:hidden text-white hover:text-blue-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul
          className={`md:flex space-x-6 absolute md:relative bg-gray-900 md:bg-transparent top-full w-full md:w-auto transition-all duration-300 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li><Link href="#hero" className="hover:text-blue-400">Start</Link></li>
          <li><Link href="#services" className="hover:text-blue-400">Usługi</Link></li>
          <li><Link href="#about" className="hover:text-blue-400">O Mnie</Link></li>
          <li><Link href="#projects" className="hover:text-blue-400">Projekty</Link></li>
          <li><Link href="#contact" className="hover:text-blue-400">Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
