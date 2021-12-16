module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://besthqwallpapers.com/Uploads/29-3-2018/46373/thumb2-max-verstappen-4k-raceway-2018-cars-f1.jpg')",
      },
      colors: {
        primary: {
          borderColor: "#dbdbdb",
          linkColor: "rgba(0, 0, 0, 0.54)",
          hoverColorDropdown: "rgba(0, 0, 0, 0.04)",
          bgOrange100: "#feecdc",
          linkHoverEffect: "rgba(0, 0, 0, 0.04)",
          sideBarIconColor: "rgba(0, 0, 0, 0.54)",
          icon: "#686868",
          deleteButtonHover: "#F5DFDE",
        },
      },
      width: {},
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
