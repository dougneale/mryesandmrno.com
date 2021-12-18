module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: "Ubuntu",
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    extend: {
      spacing: {
        home: "520px",
      },
      backgroundImage: {
        truck: "url('/images/truck.png')",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: "200",
            },
            h2: {
              fontWeight: "200",
            },
            h3: {
              fontWeight: "200",
            },
            // ...
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
