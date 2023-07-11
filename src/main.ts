/*
 * @Author: Alkaid(AlkaidMegrez@outlook.com)
 * @Date: 2023-07-09 03:01:53
 * @LastEditors: Alkaid(AlkaidMegrez@outlook.com)
 * @LastEditTime: 2023-07-11 14:21:12
 * @FilePath: /theme-crux/src/main.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by Crux, All Rights Reserved. 
 */
import "./styles/tailwind.css";
import "./styles/main.css";
import Alpine from "alpinejs";
import github from "./data/github";
import dropdown from "./data/dropdown";
import toc from "./data/toc"

window.Alpine = Alpine;

Alpine.data("github", github);
Alpine.data("dropdown", dropdown);
Alpine.data('toc',toc)
Alpine.start();
