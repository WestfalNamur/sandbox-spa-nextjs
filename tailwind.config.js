module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#97D1CA",
          200: "#7DC6BD",
          300: "#5CB8AD",
          400: "#33A699",
          500: "#009080", // Main
          600: "#007366",
          700: "#005C52",
          800: "#004A42",
          900: "#003B35",
        },
        gray: {
          100: "#E7ECF7",
          200: "#E1E7F5",
          300: "#DAE1F2",
          400: "#D1DAEF",
          500: "#C5D1EB", // Maine
          600: "#9EA7BC",
          700: "#7E8696",
          800: "#656B78",
          900: "#515660",
        },
        appPrimary: {
          light: "#5CB8AD",
          DEFAULT: "#009080",
          dark: "#005C52",
        },
        appGray: {
          light: "#DAE1F2",
          DEFAULT: "#C5D1EB",
          dark: "#7E8696",
        },
      },
    },
    plugins: [],
  },
};
