#!/bin/sh

echo "\nInitializing git repository\n"
git init

echo "\nInitializing husky (Please hit return/enter key for the next prompt)\n"
npx husky-init

echo "\nInstalling node_modules with yarn\n"
yarn install

echo "\nInitializing husky hooks\n"
npx husky set .husky/pre-commit "npm run lint"
npx husky set .husky/pre-push "npm run lint"

echo "\nInstalling Pods\n"
cd ios && pod install && cd .. && cd ..