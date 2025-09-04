import { BuilderConfig } from "@/builder/types";
import { readGlobFiles } from "@/common/files/helper";

export async function buildMiniStory(config: BuilderConfig) {
  const storiesFiles = await Promise.all(config.storiesPaths.map(readGlobFiles));

  return storiesFiles;
}
