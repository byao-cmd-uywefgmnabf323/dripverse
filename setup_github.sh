#!/bin/bash

# Update git configuration with your GitHub credentials
git config --global user.name "Bowen Yao"
git config --global user.email "bowenyao@MacBook-Pro-2.local"

# Set up git to use the personal access token for authentication
git config --global url."https://${GITHUB_TOKEN}@github.com/".insteadOf "https://github.com/"

echo "GitHub credentials have been configured!"
