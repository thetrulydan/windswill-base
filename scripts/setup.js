#!/usr/bin/env node
import { writeFile, readFile, access } from 'fs/promises';
import { F_OK } from 'fs/constants.js';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const envTemplate = `# Local development
NODE_ENV=development
PORT=3000
VITE_API_URL=http://localhost:3000

# Database (local SQLite)
DATABASE_URL=file:./data.db

# Auth (generate your own secret)
AUTH_SECRET=your-secret-here-min-32-chars-long

# Optional: Cloud sync (Turso)
# TURSO_DATABASE_URL=
# TURSO_AUTH_TOKEN=
`;

async function setup() {
  const envPath = join(__dirname, '..', '.env.local');

  try {
    await access(envPath, F_OK);
    console.log('.env.local already exists');
    return;
  } catch {
    console.log('Creating .env.local...');
  }

  await writeFile(envPath, envTemplate);
  console.log('Created .env.local');
  console.log('Edit it with your values');
}

setup().catch(console.error);