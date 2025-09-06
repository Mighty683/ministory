import { UserConfig } from "vite";

export type BuilderConfig = {
  build?: boolean;
  viteConfig?: UserConfig;
  port?: number;
  /**
   * Paths to the story files (glob patterns)
   */
  storiesPaths: string[];
};

export type StoryPluginConfig = { stories: string[] };

export type ViteConfigArgs = {
  userConfig?: UserConfig;
  storyPluginConfig: StoryPluginConfig;
};
