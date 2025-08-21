import Image from "next/image";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 flex flex-col items-center justify-center transition-all duration-700 animate-fadeIn px-8 md:px-2 lg:px-16 xl:px-24"
    >
      <h2 className="text-3xl font-bold mb-2 text-center">O Mnie</h2>
      <hr className="w-1/3 border-t-2 border-[var(--color-accent)] mb-6" />

      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-16 xl:gap-60">
        {/* Zdjęcie profilowe */}
        <div className="w-full  flex justify-center mb-6 lg:mb-0">
          <Image
            src="/profile.png"
            alt="Karol Rembiasz"
            width={600}
            height={600}
            className="rounded-lg max-w-[70%] md:max-w-[400px] lg:max-w-[400px] xl:max-w-[550px] h-auto"
          />
        </div>

        {/* Tekst o mnie */}
        <div className="text-justify max-w-lg md:max-w-2xl lg:max-w-lg">
          <p className="text-lg text-[var(--color-gray-dark)] leading-relaxed">
            Jestem pasjonatem programowania z solidnym wykształceniem w dziedzinie informatyki. 
            Ukończyłem studia inżynierskie na kierunku Informatyka Stosowana w Akademii Nauk Stosowanych w Nowym Sączu, 
            a obecnie kontynuuję tam studia magisterskie, specjalizując się w Programowaniu Systemów Informatycznych.
          </p>
          <p className="mt-4 text-lg text-[var(--color-gray-dark)] leading-relaxed">
            Specjalizuję się w tworzeniu aplikacji webowych i desktopowych, a także w zarządzaniu bazami danych. 
            Posiadam doświadczenie w pracy z technologiami takimi jak React, TypeScript, Node.js, .NET, C#, SQL, Python. 
            Tworzę nowoczesne, responsywne interfejsy użytkownika, dbając o intuicyjność i wydajność aplikacji. 
            W Pythonie rozwijam również aplikacje związane ze sztuczną inteligencją, wykorzystując biblioteki i narzędzia 
            wspierające uczenie maszynowe oraz analizę danych.
          </p>
          <p className="mt-4 text-lg text-[var(--color-gray-dark)] leading-relaxed">
            Poza programowaniem interesuję się sztuczną inteligencją – pogłębiam wiedzę o jej zastosowaniach, 
            architekturach modeli i praktykach wdrażania rozwiązań AI. Dodatkowo fascynuje mnie optymalizacja kodu 
            oraz najlepsze praktyki w zakresie wydajności aplikacji i bezpieczeństwa danych. 
            Nieustannie rozwijam swoje umiejętności, eksplorując nowe technologie i rozwiązania.
          </p>
          <p className="mt-4 text-lg text-[var(--color-gray-dark)] leading-relaxed">
            Jeśli szukasz zaangażowanego i kreatywnego developera, który z pasją podchodzi do tworzenia nowoczesnych 
            rozwiązań IT – zapraszam do współpracy!
          </p>



          {/* Przycisk pobrania CV */}
          <div className="flex justify-center lg:justify-start">
            <a href="/Karol_Rembiasz_CV.pdf"
            download="Karol_Rembiasz_CV.pdf" className="mt-6 bg-[var(--color-accent)] px-6 py-3 rounded-lg hover:text-black transition duration-300 transform hover:scale-105 flex items-center">
              <FaDownload className="mr-2" /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
