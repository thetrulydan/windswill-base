#!/usr/bin/env node
import { readdir, rename, writeFile, readFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const packageRenames = [
  ['@windswill/config', 'app-name'],
  ['@windswill/core', 'app-name'],
  ['@windswill/ui', 'app-name'],
];

const fileRenames = [
  ['packages/config', 'packages'],
  ['packages/core', 'packages'],
  ['packages/ui', 'packages'],
  ['apps/web', 'apps'],
  ['apps/desktop', 'apps'],
  ['backend/local', 'backend'],
  ['backend/cloud', 'backend'],
];

async function init() {
  const appName = process.argv[2] || 'my-app';

  if (!existsSync(join(__dirname, '..', 'node_modules'))) {
    console.log('Running pnpm install first...');
  }

  console.log(`Initializing ${appName}...`);
  console.log('Edit package.json files to rename packages');
  console.log('Done!');
}

init().catch(console.error);