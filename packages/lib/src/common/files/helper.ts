import { dirname, resolve } from "path";
import { existsSync } from "fs";
import { glob } from "fs/promises";

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
  for await (const file of glob("**/*")) {
    files.push(file);
  }
  return files;
}
