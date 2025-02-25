"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Skontaktuj się ze mną</h2>
        <hr className="w-1/3 mx-auto border-t-2 border-[var(--color-accent)] mb-6" />

        {success && <p className="text-green-500 mb-4">✅ Wiadomość wysłana!</p>}
        {error && <p className="text-red-500 mb-4">❌ Błąd wysyłania wiadomości.</p>}

        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 lg:space-x-24 xl:space-x-32">
          <div className="mt-8 md:mt-0 text-left text-[var(--color-gray-light)] max-w-md lg:max-w-lg">
            <h3 className="text-2xl font-semibold mb-4">Dane kontaktowe</h3>
            <p className="flex items-center mb-2">
              <FaEnvelope className="mr-2" /> rembiaszkarol@icloud.com
            </p>
            <p className="flex items-center mb-2">
              <FaPhone className="mr-2" /> +48 799 260 802
            </p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> Nowy Sącz, Polska
            </p>
          </div>
          <div className="flex items-center mx-4 md:mx-0 my-8 md:my-0">
            <hr className="w-16 border-t-1 border-[var(--color-gray-light)]" />
            <span className="text-[var(--color-gray-light)] mx-2">LUB</span>
            <hr className="w-16 border-t-1 border-[var(--color-gray-light)]" />
          </div>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 rounded-lg shadow-md bg-[var(--color-gray-dark-2)] w-full lg:max-w-xl">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Twoje imię"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-[var(--color-gray-light)] rounded-md bg-[var(--color-gray-dark-2)] text-[var(--color-gray-light)]"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Twój email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-[var(--color-gray-light)] rounded-md bg-[var(--color-gray-dark-2)] text-[var(--color-gray-light)]"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Twoja wiadomość"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border border-[var(--color-gray-light)] rounded-md bg-[var(--color-gray-dark-2)] text-[var(--color-gray-light)] h-32"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-[var(--color-accent)] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-[var(--color-accent-dark)] transition duration-300 flex items-center"
              >
                <FaPaperPlane className="mr-2" />
                {loading ? "Wysyłanie..." : "Wyślij wiadomość"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
