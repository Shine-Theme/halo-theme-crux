/*
 * @Author: Alkaid(AlkaidMegrez@outlook.com)
 * @Date: 2023-07-16 21:30:40
 * @LastEditors: Alkaid(AlkaidMegrez@outlook.com)
 * @LastEditTime: 2023-07-16 21:33:00
 * @FilePath: /theme-crux/src/data/social.ts
 * @Description:
 *
 * Copyright (c) 2023 by Crux, All Rights Reserved.
 */
export default () => ({
  qr_code: {
    open: false,
    title: "",
    image: "",
  },
  open(title: string, image: string) {
    this.qr_code.open = true;
    this.qr_code.title = title;
    this.qr_code.image = image;
  },
  close() {
    this.qr_code.open = false;
  },
});
