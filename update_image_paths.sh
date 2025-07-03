#!/bin/bash

# Update image paths in all JavaScript files
find src -type f -name "*.js" -exec sed -i '' 's|/images/|/dripverse/images/|g' {} \;

# Add and commit changes
git add .
git commit -m "Automatically update image paths for GitHub Pages"
git push origin main
