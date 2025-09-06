import { stories } from "virtual:stories";

const root = document.createElement("div");
root.innerHTML = `<h1>MiniStory</h1>
<ul>
  ${stories.map(story => `<li>${story}</li>`).join("\n")}
</ul>
<div id="story-root"></div>
`;
document.body.appendChild(root);
