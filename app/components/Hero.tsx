"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

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
        }, 200);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="h-screen z-1000 flex flex-col lg:flex-row items-center justify-center xl:gap-16 text-white bg-cover bg-center relative md:px-0 lg:px-11"
    >
      <div className="text-center lg:text-left z-10 flex flex-col items-center lg:items-start max-w-xl lg:max-w-3xl md:max-w-full">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 text-[var(--color-gray-dark)] min-h-[16px] md:min-h-[28px] lg:min-h-[40px]">
          {text}
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[var(--color-gray-light)] min-h-[38px] md:min-h-[44px] lg:min-h-[60px]">
          {name}
        </h2>
        <p className="text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-gray-light)] bg-clip-text text-transparent">
          WEB & .NET developer
        </p>
        <div className="flex justify-center lg:justify-start space-x-4 md:space-x-6 my-6">
          <a href="www.linkedin.com/in/karol-rembiasz-14515830b" target="_blank" rel="noopener noreferrer" className="text-[var(--color-gray-light)] hover:text-[var(--color-accent)]">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/KarolR2001" target="_blank" rel="noopener noreferrer" className="text-[var(--color-gray-light)] hover:text-[var(--color-accent)]">
            <FaGithub size={30} />
          </a>
          <a href="https://www.facebook.com/karol.rembiasz.5/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-gray-light)] hover:text-[var(--color-accent)]">
            <FaFacebook size={30} />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#contact"
            className="bg-[var(--color-accent)] px-6 md:px-10 py-3 md:py-4 rounded-lg hover:bg-[var(--color-accent)] transition duration-300 transform hover:scale-105 text-center"
          >
            Zatrudnij Mnie
          </a>
          <a
            href="/Karol_Rembiasz_CV.pdf"
            download="Karol_Rembiasz_CV.pdf"
            className="border border-[var(--color-gray-dark)] px-6 md:px-10 py-3 md:py-4 rounded-lg hover:bg-[var(--color-gray-dark)] hover:text-black transition duration-300 transform hover:scale-105 text-center"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="relative flex justify-center lg:justify-end w-full lg:w-auto">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px]">
          <Image
            src="/profilowe.png"
            alt="Karol Rembiasz"
            priority
            width={700}
            quality={100}
            height={700}
            className="rounded-full object-cover shadow-inner"
  style={{
    WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)",
    maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 93%)"
  }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
