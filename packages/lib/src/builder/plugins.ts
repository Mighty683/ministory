import { Plugin } from "vite";
import IndexHTML from "./ui/index.html?raw";
import { StoryPluginConfig } from "@/builder/types";

export const virtualHTMLPlugin: Plugin = {
  name: "virtual-html",
  transformIndexHtml() {
    return IndexHTML;
  },
};

export const storyLoaderPlugin = ({ stories }: StoryPluginConfig): Plugin => ({
  name: "story-loader",
  resolveId(id) {
    if (id === "virtual:stories") {
      return id;
    }
    return null;
  },
  load(id) {
    if (id === "virtual:stories") {
      return `export const stories = ${JSON.stringify(stories)};`;
    }
    return null;
  },
});
