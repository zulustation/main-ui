const spacings = [...new Array(101)]
  .map((_, idx) => idx)
  .reduce((prev, val) => {
    return {
      ...prev,
      [`ztg-${val}`]: `${val}px`,
    };
  }, {});

const zIndexes = [...new Array(51)]
  .map((_, idx) => idx)
  .reduce((prev, val) => {
    return {
      ...prev,
      [`ztg-${val}`]: val,
    };
  }, {});

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./campaigns/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    zIndex: {
      ...zIndexes,
    },
    fontFamily: {
      mono: [
        "Roboto Mono",
        "Space Mono",
        "Menlo",
        "ui-monospace",
        "SFMono-Regular",
        "Monaco",
        "Consolas",
        "Liberation",
        "Mono",
        "Courier New",
        "monospace",
      ],
      sans: [
        "Roboto",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
      ],
      kanit: ["Kanit"],
      lato: ["Lato"],
      space: ["Space Grotesk"],
      roboto: ["Roboto Mono"],
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
      borderRadius: {
        // NEW
        "ztg-5": "5px",
        "ztg-10": "10px",
        "ztg-12": "12px",
        "ztg-50": "50px",
        "ztg-100": "100px",
      },
      boxShadow: {
        // NEW
        "ztg-1": "0px 4px 10px rgba(0, 0, 0, 0.1)",
        "ztg-2":
          "0px 12.5216px 10.0172px rgba(0, 1, 254, 0.14), 0px 4.5288px 3.62304px rgba(0, 1, 254, 0.0975551)",
        "ztg-3": "10px 30px 80px rgba(0, 1, 254, 0.5)",
        "ztg-4": "0px 0px 80px #3A475A",
      },
      fontSize: {
        "lg-2": ["1.375rem", "1.875rem"],
        xxs: ["0.5625rem", "0.75rem"],

        // NEW
        "ztg-10-150": ["0.625rem", "1.5"],
        "ztg-10-180": ["0.625rem", "1.8"],
        "ztg-12-120": ["0.75rem", "1.2"],
        "ztg-12-150": ["0.75rem", "1.5"],
        "ztg-14-110": ["0.875rem", "1.1"],
        "ztg-14-120": ["0.875rem", "1.2"],
        "ztg-14-150": ["0.875rem", "1.5"],
        "ztg-14-180": ["0.875rem", "1.8"],
        "ztg-16-150": ["1rem", "1.5"],
        "ztg-18-150": ["1.125rem", "1.5"],
        "ztg-19-120": ["1.1875rem", "1.2"],
        "ztg-20-150": ["1.25rem", "1.5"],
        "ztg-22-120": ["1.375rem", "1.2"],
        "ztg-28-120": ["1.75rem", "1.2"],
      },
      backgroundImage: (theme) => ({
        "rectangle-red": "url('/kusama-derby/rectangle-red.svg')",
        "kusama-bg-slot-1-md": "url('/kusama-derby/bg-md-rectangles.png')",
        "kusama-bg-slot-1-lg": "url('/kusama-derby/bg-lg-rectangles.png')",
        "kusama-bg-slot-2-md": "url('/kusama-derby/bg-md-rectangles-blue.png')",
        "kusama-bg-slot-2-lg": "url('/kusama-derby/bg-lg-rectangles-blue.png')",
        "kusama-bg-slot-3-md":
          "url('/kusama-derby/bg-md-rectangles-green.png')",
        "kusama-bg-slot-3-lg":
          "url('/kusama-derby/bg-lg-rectangles-green.png')",
        "kusama-derby-position": "url('/kusama-derby/position-bg.jpg')",
        "kusama-banner": "url('/kusama-derby/kusama-banner-horse.png')",
        "blue-circle": "url('/kusama-derby/blue-circle-bg.png')",
        "green-triangle": "url('/kusama-derby/green-triangle-bg.png')",
        "shapes-md-red": "url('/kusama-derby/bg-md-shapes.png')",
        "shapes-lg-red": "url('/kusama-derby/bg-lg-shapes.png')",
        "finishline-slot-1-lg": "url('/kusama-derby/finishline-slot-1.png')",
        "finishline-slot-2-lg": "url('/kusama-derby/finishline-slot-2.png')",
        "finishline-slot-3-lg": "url('/kusama-derby/finishline-slot-3.png')",
        "finishline-slot-1-md": "url('/kusama-derby/finishline-slot-1-md.png')",
        "finishline-slot-2-md": "url('/kusama-derby/finishline-slot-2-md.png')",
        "finishline-slot-3-md": "url('/kusama-derby/finishline-slot-3-md.png')",
      }),
      backgroundPosition: {
        "center-30": "center 30%",
        "center-15": "center 15%",
        "center-75": "center 75%",
        "center-675px": "center 675px",
        "70-0": "70% 0",
        "40-center": "40% center",
        "30-center": "30% center",
        "20-center": "20% center",
      },
      backgroundSize: {
        "165px": "165px",
        "248px": "248px",
        "365px": "365px",
        "560px": "560px",
      },
      colors: {
        "kusama-base": "#E10178",
        "kusama-green": "#00E7BD",
        "kusama-blue": "#00B0E7",
        "purple-1": "#DF0076",
        "blue-1": "#00B0E7",
        "green-1": "#00E7BD",
        "orange-1": "#FF4F18",
        "gray-1a": "#1A1A1A",
        "gray-12": "#121212",
        "gray-ee": "#EEEEEE",
        "gray-dd": "#DDDDDD",
        "gray-b6": "#B6B6B6",
        "gray-42": "#424242",
        "accent-1": "#333",
        "gray-light-1": "#FFF9F9",
        "gray-light-2": "#EFF4F6",
        "gray-light-3": "#E0E9EF",
        "gray-light-4": "#CBD5DC",
        "gray-dark-1": "#525C64",
        "gray-dark-2": "#6C757C",
        "dark-1": "#232C33",
        "alt-black": "#191F24",
        "alt-white": "#F7F7F2",
        "dark-gray": "#2A2A2A",
        "light-gray": "#F5F5F5",
        efefef: "#EFEFEF",
        //finalised proto colour pallet
        "ztg-blue": "#0001FE",
        "laser-lemon": "#F7FF58",
        sunglow: "#FFD23F",
        "sunglow-2": "#FAB400",
        "dark-yellow": "#A88000",
        "red-crayola": "#FF0054",
        "sheen-green": "#70C703",
        "info-blue": "#00A0FA",
        vermilion: "#E90303",
        "vermilion-light": "#FFE4E6",
        "sky-100": "#F4F7FA",
        "sky-200": "#D9E3EE",
        "sky-300": "#CFDBE9",
        "sky-400": "#ABB9C8",
        "sky-500": "#94A2B3",
        "sky-600": "#748296",
        "sky-700": "#1D2533",
        "sky-800": "#171E29",
        "sky-900": "#141A24",
        "sky-1000": "#11161F",
        "sky-1100": "#0E1219",
        "border-light": "#A3BDDB",
        "border-dark": "#2A384D",
        "gray-dark-3": "#88959F",
        "mid-content-lt": "#E6EDF4",
        "dark-hover": "#040A10",
        "light-hover": "#E9EFF5",
        fushsia: "#86198F",
        rose: "#9F1239",
        "aquarium-blue": "#181F2B",
        starfall: "#D7E2ED",
        "light-overlay": "rgba(0,0,0,0.4)",
        "dark-overlay": "rgba(5,5,5,0.7)",
      },
      inset: {
        "42%": "42%",

        // NEW
        "ztg-88": "88px",
        "ztg-34": "34px",
        "ztg-full": "100%",
      },
      flex: {
        // NEW
        "ztg-basis-54": "0 0 54px",
        "ztg-basis-66": "0 0 66px",
        "ztg-basis-80": "0 0 80px",
        "ztg-basis-85": "0 0 85px",
        "ztg-basis-100": "0 0 100px",
        "ztg-basis-112": "0 0 112px",
        "ztg-basis-115": "0 0 115px",
        "ztg-basis-124": "0 0 124px",
        "ztg-basis-144": "0 0 144px",
        "ztg-basis-164": "0 0 164px",
        "ztg-basis-240": "0 0 240px",
        "ztg-basis-248": "0 0 248px",
        "ztg-basis-355": "0 0 355px",
        "ztg-basis-380": "0 0 380px",
        "ztg-basis-400": "0 0 400px",
        "ztg-basis-520": "0 0 520px",
      },
      spacing: {
        "90%": "90%",
        "88%": "88%",
        "85%": "85%",
        "83%": "83%",
        "10%": "10%",
        "20%": "20%",
        "6%": "6%",
        "7.1%": "7.1%",
        "6.5%": "6.5%",
        "0.5%": "0.5%",
        12.5: "3.125rem",
        34: "8.5rem",
        "16%": "16.67%",

        // NEW
        ...spacings,
        "ztg-107": "107px",
        "ztg-138": "138px",
      },
      width: {
        29: "7.25rem",
        100: "25rem",
        160: "40rem",
        176: "44rem",
        192: "48rem",
        200: "50rem",
        240: "60rem",
        320: "80rem",

        // NEW
        "ztg-96": "96px",
        "ztg-100": "100px",
        "ztg-108": "108px",
        "ztg-114": "114px",
        "ztg-115": "115px",
        "ztg-118": "118px",
        "ztg-123": "123px",
        "ztg-130": "130px",
        "ztg-148": "148px",
        "ztg-164": "164px",
        "ztg-166": "166px",
        "ztg-168": "168px",
        "ztg-176": "176px",
        "ztg-184": "184px",
        "ztg-200": "200px",
        "ztg-216": "216px",
        "ztg-240": "240px",
        "ztg-247": "247px",
        "ztg-256": "256px",
        "ztg-266": "266px",
        "ztg-275": "275px",
        "ztg-308": "308px",
        "ztg-330": "330px",
        "ztg-360": "360px",
        "ztg-550": "550px",
      },
      height: {
        // NEW
        "ztg-full-vh": "100vh",
        "ztg-104": "104px",
        "ztg-136": "136px",
        "ztg-232": "232px",
      },
      maxWidth: {
        "170px": "170px",
        "150px": "150px",

        // NEW
        "ztg-68": "68px",
        "ztg-184": "184px",
        "ztg-390": "390px",
        "ztg-1100": "1100px",
      },
      minWidth: {
        // NEW
        "ztg-85": "85px",
        "ztg-100": "100px",
      },
      maxHeight: {
        "40px": "40px",

        // NEW
        "ztg-70": "70px",
        "ztg-474": "474px",
      },
      minHeight: {
        // NEW
        "ztg-96": "96px",
      },
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"],
      opacity: ["disabled"],
      borderWidth: ["first"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
