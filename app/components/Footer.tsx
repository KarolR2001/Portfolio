import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-gray-dark-2)] text-white text-center py-6 mt-16 transition-all duration-700 opacity-0 animate-fadeIn">
      <div className="container mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Karol Rembiasz. Wszystkie prawa zastrzeżone.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/karolrembiasz"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/karolrembiasz"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
