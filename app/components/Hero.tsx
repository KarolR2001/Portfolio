"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const fullText = "Cześć, jestem";
  const fullName = "Karol Rembiasz";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          let nameIndex = 0;
          const nameInterval = setInterval(() => {
            setName(fullName.substring(0, nameIndex + 1));
            nameIndex++;
            if (nameIndex >= fullName.length) {
              clearInterval(nameInterval);
            }
          }, 100);
        }, 200); // Delay before starting the name typing effect
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row items-center justify-center text-white bg-cover bg-center relative p-4"
    >
      <div className="text-center md:text-left z-10 transition-opacity duration-1000 opacity-0 animate-fadeIn mt-[-50px] md:mt-[-120px]">
        <h1 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-[var(--color-gray-dark)]">
          <span className="inline-block w-full md:w-[24ch] whitespace-normal md:whitespace-nowrap overflow-hidden">
            {text}
          </span>
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-[var(--color-gray-light)]">
          <span className="inline-block w-full md:w-[24ch] whitespace-normal md:whitespace-nowrap overflow-hidden">
            {name}
          </span>
        </h2>
        <p className="text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-gray-light)] bg-clip-text text-transparent">
          WEB & .NET developer
        </p>
        <div className="flex justify-center md:justify-start space-x-4 md:space-x-8 my-8">
          <a href="https://www.linkedin.com/in/karolrembiasz" target="_blank" rel="noopener noreferrer" className="text-[var(--color-gray-light)] hover:text-[var(--color-accent)]">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/karolrembiasz" target="_blank" rel="noopener noreferrer" className="text-[var(--color-gray-light)] hover:text-[var(--color-accent)]">
            <FaGithub size={30} />
          </a>
          <a href="https://twitter.com/karolrembiasz" target="_blank" rel="noopener noreferrer" className="text-[var(--color-gray-light)] hover:text-[var(--color-accent)]">
            <FaTwitter size={30} />
          </a>
        </div>
        <div className="flex justify-center md:justify-start space-x-4 md:space-x-8">
          <button className="bg-[var(--color-accent)] px-6 md:px-10 py-3 md:py-4 rounded-lg hover:bg-[var(--color-accent)] transition duration-300 transform hover:scale-105">
            Hire Me
          </button>
          <button className="border border-[var(--color-gray-dark)] px-6 md:px-10 py-3 md:py-4 rounded-lg hover:bg-[var(--color-gray-dark)] hover:text-black transition duration-300 transform hover:scale-105">
            Download CV
          </button>
        </div>
      </div>
      <div className="relative mt-8 md:mt-0 md:ml-8 z-10">
        <div className="absolute inset-5 w-[280px] h-[280px] md:w-[560px] md:h-[560px] bg-[var(--color-gray-dark)] rounded-full opacity-20 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gray-900 opacity-1000"></div>
        </div>
        <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] overflow-visible rounded-full">
          <Image
            src="/profile.png"
            alt="Karol Rembiasz"
            width={600}
            height={600}
            className="rounded-full relative -top-10 md:-top-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
