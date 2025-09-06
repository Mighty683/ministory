declare module "*.html?raw" {
  const content: string;
  export default content;
}

declare module "virtual:stories" {
  export const stories: any[];
}
