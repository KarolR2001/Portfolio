"use client";

import Image from "next/image";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Wedding Planner App",
    description: "Aplikacja do zarządzania usługodawcami w branży ślubnej wraz z funkcjami plannera ślubnego.",
    image: "/weedingApp.png",
    link: "https://github.com/KarolR2001/weddingApp?tab=readme-ov-file#-zrzuty-ekranu",
  },
  {
    title: "Music Band Website",
    description: "Strona internetowa dla zespołu muzycznego.",
    image: "/music-band.png",
    link: "https://music-band.com",
  },
  {
    title: "Portfolio Website",
    description: "Moje własne portfolio z użyciem Next.js.",
    image: "/portfolio.png",
    link: "https://portfolio.com",
  },
  {
    title: "Strona internetowa BrainTMS",
    description: "Strona internetowa dla firmy transportowej BrainTMS",
    image: "/brainTMS.png",
    link: "https://portfolio.com",
  },
  {
    title: "CRM System",
    description: "Aplikacja do zarządzania fakturami, umowami przy użyciu React Node.js i Prisma.",
    image: "/crmSystem.jpg",
    link: "https://portfolio.com",
  },
  {
    title: "Aplikacja .NET C# Bakery System",
    description: "Aplikacja desktop do zarządzania piekarnią przy użyciu .NET i C#.",
    image: "/bakerySystem.png",
    link: "https://portfolio.com",
  },
];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Projekty</h2>
        <hr className="w-1/3 mx-auto border-t-2 border-[var(--color-accent)] mb-10" />

        {/* Strzałki przewijania */}
        <button
          className="hidden sm:flex absolute top-1/2 left-4 transform -translate-y-1/2 bg-[var(--color-accent)] text-white p-4 rounded-full shadow-lg hover:text-black transition duration-300"
          onClick={scrollLeft}
        >
          <FaArrowLeft size={20} />
        </button>

        <button
          className="hidden sm:flex absolute top-1/2 right-4 transform -translate-y-1/2 bg-[var(--color-accent)] text-white p-4 rounded-full shadow-lg hover:text-black transition duration-300"
          onClick={scrollRight}
        >
          <FaArrowRight size={20} />
        </button>

        {/* Karuzela projektów */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[var(--color-gray-dark-2)] p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl min-w-[400px] sm:min-w-[450px] lg:min-w-[500px] snap-center"
            >
              <div className="relative w-full h-72 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:opacity-75 transition-opacity duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-[var(--color-gray-light)]">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
