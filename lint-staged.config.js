module.exports = {
  "*.{js,jsx,ts,tsx}": ["npx @biomejs/biome format ./src --write"],
  "**/*.ts?(x)": () => "npm run check-types",
  "*.{json,yaml}": ["npx @biomejs/biome format ./src --write"],
};
