module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B6B",
        secondary: "#FFF6F6",
        button:"#DC342B",
        pageColour:"#FCF4F1"
      },
      fontFamily: {
        poppins: ["Poppins",], // Add Google Font
        Berkshire: ["Berkshire Swash"], // Add custom font
      },
    },
  },
  plugins: [],
};
