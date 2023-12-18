#!/bin/bash

# Set up Husky
npm pkg set scripts.prepare="husky install" &&
npm run prepare &&

# Add pre-commit hooks
npx husky add .husky/pre-commit "npm run lint-staged" &&
npx husky add .husky/pre-commit "npm run test" &&
npx husky add .husky/pre-commit "npm run e2e:headless" &&

# Create and configure commit-msg hook
echo '#!/bin/sh' > .husky/commit-msg &&
echo '. "$(dirname "$0")/_/husky.sh"' >> .husky/commit-msg &&
echo 'cd "$(dirname "$0")/.." && exec npx --no -- commitlint --edit $1' >> .husky/commit-msg &&
chmod +x .husky/commit-msg &&
npx husky add .husky/commit-msg ".husky/commit-msg" &&

# Add changes to Git
git add .husky/pre-commit .husky/commit-msg
