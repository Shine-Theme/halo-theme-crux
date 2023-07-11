import * as tocbot from "tocbot";
export default () => ({
  generateToc(content_id: string, toc_container_class: string, toc_class: string) {
    const content = document.getElementById(content_id);
    const titles = content?.querySelectorAll("h1, h2, h3, h4");
    if (!titles || titles.length === 0) {
      const tocContainer = document.querySelector("." + toc_container_class);
      tocContainer?.remove();
      return;
    }
    tocbot.init({
      tocSelector: "." + toc_class,
      contentSelector: "#" + content_id,
      headingSelector: "h1, h2, h3, h4",
      extraListClasses: "space-y-1 dark:border-slate-500",
      extraLinkClasses:
        "group flex items-center justify-between rounded py-1 px-1.5 transition-all hover:bg-gray-100 text-sm opacity-80 dark:hover:bg-slate-700 dark:text-slate-50",
      activeLinkClass: "is-active-link",
      collapseDepth: 6,
      headingsOffset: 100,
      scrollSmooth: true,
      scrollSmoothOffset: -120,
    });
  },

  // this function copy from https://github.com/halo-dev/theme-earth/blob/main/src/main.ts
});
