/*
 * @Author: Alkaid(AlkaidMegrez@outlook.com)
 * @Date: 2023-07-11 00:08:17
 * @LastEditors: Alkaid(AlkaidMegrez@outlook.com)
 * @LastEditTime: 2023-07-11 18:00:13
 * @FilePath: /theme-crux/src/data/github.ts
 * @Description: 当前解决方案会泄漏github_token，不建议使用，即将弃用
 *
 * Copyright (c) 2023 by Crux, All Rights Reserved.
 */

import axios from "axios";
export default () => ({
  loading: true,
  error: false,
  userinfo: {},
  repos: {},
  get(github_username: string, github_token: string) {
    axios
      .get("https://api.github.com/users/" + github_username, {
        headers: {
          Authorization: "token " + github_token,
        },
      })
      .then((response) => {
        this.userinfo = response.data;
        axios
          .get(response.data.repos_url, {
            headers: {
              Authorization: "token " + github_token,
            },
          })
          .then((response) => {
            this.repos = response.data;
            this.loading = false;
          })
          .catch(() => {
            this.loading = false;
            this.error = true;
          });
      })
      .catch(() => {
        this.loading = false;
        this.error = true;
      });
  },
});
