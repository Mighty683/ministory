import { createFinalConfig } from "@/builder/configs";
import { BuilderConfig } from "@/builder/types";
import { readGlobFiles } from "@/common/files/helper";
import { createServer } from "vite";

export async function buildMiniStory(config: BuilderConfig) {
  try {
    const storiesFiles = await Promise.all(config.storiesPaths.map(readGlobFiles));

    if (config.build) {
      // TODO: implement build
    } else {
      const viteConfigFinal = createFinalConfig({
        userConfig: config.viteConfig,
        storyPluginConfig: { stories: storiesFiles.flat() },
      });
      const server = await createServer({
        configFile: false,
        ...viteConfigFinal,
      });

      console.log("Running MiniStory...");
      await server.listen(config.port || 6006);
    }
  } catch (error) {
    console.error("Error during MiniStory build:", error);
    process.exit(1);
  }
}
