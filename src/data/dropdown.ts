/*
 * @Author: Alkaid(AlkaidMegrez@outlook.com)
 * @Date: 2023-07-11 00:37:39
 * @LastEditors: Alkaid(AlkaidMegrez@outlook.com)
 * @LastEditTime: 2023-07-11 00:38:14
 * @FilePath: /theme-crux/src/data/dropdown.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by Crux, All Rights Reserved. 
 */

export default () => ({
    show: false,
    toggle() {
        this.show = !this.show
        console.log(this.show)
    },
    toggle2() {
        this.show = !this.show
        console.log(this.show)
    }
})