"use client";

import Image from "next/image";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

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
    link: "https://karolr2001.github.io/WebsiteMusicBand_SMART/",
  },
  {
    title: "Portfolio Website",
    description: "Moje własne portfolio z użyciem Next.js.",
    image: "/portfolio.png",
    link: "https://karol-rembiasz-portfolio.vercel.app/",
  },
  {
    title: "Strona internetowa BrainTMS",
    description: "Strona internetowa dla firmy transportowej BrainTMS",
    image: "/brainTMS.png",
    link: "https://github.com/KarolR2001/WebSiteBrainTMS",
  },
  {
    title: "Gra w React.js Memory Game",
    description: "Gra w React.js + Vite + Zustand + SCSS polegająca na odnajdywaniu par kart.",
    image: "/memory-game.png",
    link: "https://memory-game-sigma-bice.vercel.app/",
  },
  {
    title: "CRM System",
    description: "Aplikacja do zarządzania fakturami, umowami przy użyciu React Node.js i Prisma.",
    image: "/crmSystem.jpg",
    link: "https://github.com/MateuszRumin/CRM_system_04-08_24",
  },
  {
    title: "Aplikacja .NET C# Bakery System",
    description: "Aplikacja desktop do zarządzania piekarnią przy użyciu .NET i C#.",
    image: "/bakerySystem.png",
    link: "https://github.com/pawelskraba01/Bakery_Manage_System",
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
          className="hidden sm:flex absolute top-1/2 left-4 transform -translate-y-1/2 bg-[var(--color-accent)] text-white p-4 rounded-full shadow-lg hover:text-black transition duration-300 z-10"
          onClick={scrollLeft}
        >
          <FaArrowLeft size={20} />
        </button>

        <button
          className="hidden sm:flex absolute top-1/2 right-4 transform -translate-y-1/2 bg-[var(--color-accent)] text-white p-4 rounded-full shadow-lg hover:text-black transition duration-300 z-10"
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
              className="group relative block bg-[var(--color-gray-dark-2)] p-6 rounded-lg shadow-lg transform transition-all duration-300  hover:shadow-xl min-w-[310px] sm:min-w-[300px] md:min-w-[400px] lg:min-w-[450px] xl:min-w-[500px] snap-center"
            >
              <div className="relative w-full h-72 mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:opacity-75 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaExternalLinkAlt size={40} className="text-[var(--color-accent)]" />
              </div>
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
