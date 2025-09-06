import { dirname, resolve } from "path";
import { existsSync } from "fs";
import { glob } from "fs/promises";
import { fileURLToPath } from "url";

export function getLibraryRoot(): string {
  console.log(import.meta.url);
  return fileURLToPath(new URL("../", import.meta.url));
}

export function getProjectRoot(): string {
  let currentDir = process.cwd();
  while (currentDir !== "/") {
    const pkgPath = resolve(currentDir, "package.json");
    if (existsSync(pkgPath)) {
      return currentDir;
    }
    currentDir = dirname(currentDir);
  }
  throw new Error("Could not find project root (package.json not found)");
}

export async function readGlobFiles(pattern: string): Promise<string[]> {
  const files: string[] = [];
  const projectRoot = getProjectRoot();
  for await (const file of glob(pattern, {
    cwd: projectRoot,
  })) {
    files.push(file);
  }
  return files;
}
