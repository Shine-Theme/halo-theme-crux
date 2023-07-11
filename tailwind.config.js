/*
 * @Author: Alkaid(AlkaidMegrez@outlook.com)
 * @Date: 2023-07-07 18:00:15
 * @LastEditors: Alkaid(AlkaidMegrez@outlook.com)
 * @LastEditTime: 2023-07-08 17:03:37
 * @FilePath: /theme-crux/tailwind.config.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Crux, All Rights Reserved. 
 */
/** @type {import('tailwindcss').Config} */

const { Icons } = require("tailwindcss-plugin-icons");
module.exports = {
  content: ["./templates/**/*.html", "./src/main.ts"],
  darkMode: ['class'],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    Icons(() => ({
      tabler: {
        includeAll: true,
      },
      heroicons: {
        includeAll: true,
      },
      uim:{
      
        includeAll: true,
      }
    })),
  ],
  safelist: [
    "prose-sm",
    "prose-base",
    "prose-lg",
    "prose-xl",
    "prose-2xl",
    "prose-gray",
    "prose-slate",
    "prose-zinc",
    "prose-neutral",
    "prose-stone",
  ],
};
