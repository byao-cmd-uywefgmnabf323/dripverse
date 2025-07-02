#!/bin/bash

# Build the project
npm run build

# Copy build files to docs folder
rm -rf docs
mkdir docs
cp -r build/* docs/

git add docs/
git commit -m "Deploy to GitHub Pages"
git push origin main
