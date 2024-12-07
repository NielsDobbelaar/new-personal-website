import type { Config } from "tailwindcss";
// @ts-expect-error - Tailwind CSS plugin
import clipPath from 'tailwind-clip-path';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {
        archTop: 'ellipse(50% 100% at 50% 100%)',
        archBottom: 'ellipse(50% 100% at 50% 0%)',
      },
      colors: {
        darkBase: "#34344A",
        lightBlueBase: "#DFE8FF",
        darkBlueBase: "#1E3A8A",
        lightBase: "#FFFFFF",
        lightBlueSecondary: "D8CEF6",
        subtleBorder: "#C8C8C8",

      },
    },
  },
  plugins: [clipPath],
} satisfies Config;
