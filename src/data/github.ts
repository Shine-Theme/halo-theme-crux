/*
 * @Author: Alkaid(AlkaidMegrez@outlook.com)
 * @Date: 2023-07-11 00:08:17
 * @LastEditors: Alkaid(AlkaidMegrez@outlook.com)
 * @LastEditTime: 2023-07-11 00:36:50
 * @FilePath: /theme-crux/src/data/github.ts
 * @Description: 当前解决方案会泄漏github_token，不建议使用，即将弃用
 * 
 * Copyright (c) 2023 by Crux, All Rights Reserved. 
 */


import axios from 'axios'
export default () => ({
    loading: true,
    userinfo: {},
    repos: {},
    get(github_username: string, github_token: string) {
        axios.get('https://api.github.com/users/' + github_username, {
            headers: {
                Authorization: 'token ' + github_token
            }
        }).then((response) => {
            this.userinfo = response.data
            axios.get(this.userinfo.repos_url, {
                headers: {
                    Authorization: 'token ' + github_token
                }
            }).then((response) => {
                this.repos = response.data
                this.loading = false

            }).catch((error) => {
            })
        }).catch((error) => {
        })
    }
})