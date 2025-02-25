import Image from "next/image";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 flex flex-col items-center justify-center transition-all duration-700 animate-fadeIn px-6 lg:px-16 xl:px-24"
    >
      <h2 className="text-3xl font-bold mb-2 text-center">O Mnie</h2>
      <hr className="w-1/3 border-t-2 border-[var(--color-accent)] mb-6" />

      <div className="flex flex-col md:flex-row items-center justify-center md:gap-16 lg:gap-60 xl:gap-60">
        {/* Zdjęcie profilowe */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src="/profile.png"
            alt="Karol Rembiasz"
            width={550}
            height={550}
            className="rounded-lg max-w-[70%] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[550px] h-auto"
          />
        </div>

        {/* Tekst o mnie */}
        <div className="mt-6 md:mt-0 text-justify md:text-justify max-w-lg">
          <p className="text-lg text-[var(--color-gray-dark)] leading-relaxed">
            Jestem pasjonatem programowania z solidnym wykształceniem w dziedzinie informatyki. Ukończyłem studia inżynierskie na kierunku Informatyka Stosowana, a obecnie kontynuuję naukę na studiach magisterskich, specjalizując się w Programowaniu Systemów Informatycznych.
          </p>
          <p className="mt-4 text-lg text-[var(--color-gray-dark)] leading-relaxed">
            Specjalizuję się w tworzeniu aplikacji webowych i desktopowych, a także w zarządzaniu bazami danych. Posiadam doświadczenie w pracy z technologiami takimi jak React, TypeScript, Node.js, .NET, C#, SQL. Tworzę nowoczesne, responsywne interfejsy użytkownika, dbając o intuicyjność i wydajność aplikacji.
          </p>
          <p className="mt-4 text-lg text-[var(--color-gray-dark)] leading-relaxed">
            Poza programowaniem interesuję się optymalizacją kodu i najlepszymi praktykami w zakresie wydajności aplikacji i bezpieczeństwa danych. Nieustannie rozwijam swoje umiejętności, eksplorując nowe technologie i rozwiązania.
          </p>
          <p className="mt-4 text-lg text-[var(--color-gray-dark)] leading-relaxed">
            Jeśli szukasz zaangażowanego i kreatywnego developera, który z pasją podchodzi do tworzenia nowoczesnych rozwiązań IT – zapraszam do współpracy!
          </p>

          {/* Przycisk pobrania CV */}
          <div className="flex justify-center md:justify-start">
            <button className="mt-6 bg-[var(--color-accent)] px-6 py-3 rounded-lg hover: transition duration-300 transform hover:scale-105 flex items-center">
              <FaDownload className="mr-2" /> Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
