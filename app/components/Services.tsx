import { FaCode, FaDesktop, FaDatabase, FaGlobe, FaPaintBrush, FaServer } from "react-icons/fa";

const services = [
  { title: "Tworzenie aplikacji webowych", description: "Projektowanie i rozwój aplikacji w React, TypeScript, Node.js, .NET, MySQL.", icon: <FaCode /> },
  { title: "Tworzenie aplikacji desktopowych", description: "Budowa aplikacji w C# z wykorzystaniem WPF, WinForms, Entity Framework.", icon: <FaDesktop /> },
  { title: "Zarządzanie i optymalizacja baz danych", description: "Projektowanie schematów baz danych, optymalizacja zapytań SQL i integracja z aplikacjami.", icon: <FaDatabase /> },
  { title: "Tworzenie stron internetowych", description: "Projektowanie responsywnych stron.", icon: <FaGlobe /> },
  { title: "Optymalizacja UI/UX", description: "Poprawa wyglądu i funkcjonalności aplikacji pod kątem doświadczenia użytkownika.", icon: <FaPaintBrush /> },
  { title: "Tworzenie i wdrażanie API", description: "Budowa wydajnych interfejsów API REST dla aplikacji webowych i mobilnych.", icon: <FaServer /> }
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-4 lg:px-16 xl:px-24 text-center">
      <h2 className="text-4xl font-bold mb-2 text-white">Usługi</h2>
      <hr className="w-1/3 mx-auto border-t-2 border-[var(--color-accent)] mb-6" />
      <p className="text-[var(--color-gray-light)] mb-12 max-w-2xl mx-auto">
        Oferuję szeroki zakres usług programistycznych dostosowanych do Twoich potrzeb.
      </p>
      <div id="card" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center lg:px-74 xl:px-32">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[var(--color-gray-dark-2)] p-6 sm:p-8 md:p-10 rounded-xl transition transform hover:scale-105 flex flex-col items-center justify-center text-center w-full"
            style={{
              paddingTop: "100%",  // Używamy padding-top, aby zachować proporcje
              position: "relative",  // Pozwala na użycie pozycji absolutnej wewnątrz karty
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center"
              style={{
                padding: "20px", // Odstęp wewnętrzny od krawędzi
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="text-[var(--color-accent)] text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[var(--color-accent)]">{service.title}</h3>
              <p className="mt-3 text-[var(--color-gray-dark)]">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
