import { storyLoaderPlugin } from "@/builder/plugins";
import { ViteConfigArgs } from "@/builder/types";
import { getLibraryRoot } from "@/common/files/helper";
import { resolve } from "path";
import { defineConfig, mergeConfig, UserConfig } from "vite";

export const createDefaultConfig = ({ storyPluginConfig }: Pick<ViteConfigArgs, "storyPluginConfig">) =>
  defineConfig({
    root: resolve(getLibraryRoot(), "./src/builder/ui"),
    logLevel: "info", // TODO: Change

    plugins: [storyLoaderPlugin(storyPluginConfig)],
  });

export const createFinalConfig = ({ userConfig, storyPluginConfig }: ViteConfigArgs) => {
  const defaultBuildViteConfig = createDefaultConfig({ storyPluginConfig });
  return userConfig ? mergeConfig(defaultBuildViteConfig, userConfig) : defaultBuildViteConfig;
};
