/*
 * @Author: Alkaid(AlkaidMegrez@outlook.com)
 * @Date: 2023-07-11 14:52:45
 * @LastEditors: Alkaid(AlkaidMegrez@outlook.com)
 * @LastEditTime: 2023-07-11 19:27:01
 * @FilePath: /theme-crux/src/data/darkmod.ts
 * @Description:
 *
 * Copyright (c) 2023 by Crux, All Rights Reserved.
 */
export default () => ({
  colorscheme: "light",
  init() {
    if (localStorage.getItem("color-scheme") === "dark") {
      this.colorscheme = "dark";
      document.getElementById("app")?.classList.add("dark");
    } else {
      this.colorscheme = "light";
      document.getElementById("app")?.classList.remove("dark");
    }
  },
  toggle() {
    if (this.colorscheme == "light") {
      this.colorscheme = "dark";
      localStorage.setItem("color-scheme", "dark");
      document.getElementById("app")?.classList.add("dark");
    } else {
      this.colorscheme = "light";
      localStorage.setItem("color-scheme", "light");
      document.getElementById("app")?.classList.remove("dark");
    }
    console.log(this.colorscheme);
  },
});
