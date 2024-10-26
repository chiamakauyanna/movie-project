/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                primary: "#000000", // Deep Black
                secondary: "#1C1C1C", // Dark Gray
                accent: "#E50914", // Neon Red
                gold: "#FFD700", // Royal Gold
                textPrimary: "#F5F5F5", // Light Gray for Text
                highlight: "#00BFFF", // Electric Blue for Buttons/Highlights
                crimson: "#DC143C", // Optional additional accent color
            },
            fontFamily: {
                heading: ["Montserrat", "Oswald", "sans-serif"], // Bold Cinematic Fonts
                body: ["Roboto", "Lato", "sans-serif"], // Clean and Readable
            },
        },
    },
    darkMode: "class", // Enables dark mode using the class strategy (for manual toggling)
    plugins: [],
};
