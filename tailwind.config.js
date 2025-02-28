module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     screens: {
      sm: "640px",
      md: "734px", // 👈 Zmieniamy md na 1024px
      lg: "1280px", // 👈 Przesuwamy lg wyżej
      xl: "1536px",
      "2xl": "1920px",
     },
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#1E1E1E",
        accent: "#BB86FC",
        lightGray: "#A1A1A1",
        darkGray: "#2A2A2A",
      },
    },
  },
  plugins: [],
}
