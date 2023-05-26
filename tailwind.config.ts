/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export const content = ["./content/**/*.md", "./components/**/*.vue"];
export const darkMode = "class";
export const theme = {
  extend: {
    colors: {
      primary: colors.gray,
    },
  },
};
export const plugins = [];
