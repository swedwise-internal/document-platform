/**
 * Creates the first admin user in the database.
 *
 * Usage:
 *   node scripts/create-admin.mjs <email> <password> [name]
 *   ADMIN_EMAIL=<email> ADMIN_PASSWORD=<password> ADMIN_NAME=<name> node scripts/create-admin.mjs
 *
 * Example:
 *   node scripts/create-admin.mjs jonas@swedwise.se mitt-lösenord "Jonas Kallin"
 *
 * Requires DATABASE_URL to be set in the environment (or a .env file).
 */

import { createRequire } from 'module';
import { config } from 'dotenv';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, '../.env') });
config({ path: resolve(__dirname, '../.env.local') });

const require = createRequire(import.meta.url);
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const [,, emailArg, passwordArg, nameArg] = process.argv;
const email = emailArg ?? process.env.ADMIN_EMAIL;
const password = passwordArg ?? process.env.ADMIN_PASSWORD;
const name = nameArg ?? process.env.ADMIN_NAME;

if (!email || !password) {
  console.error('Usage: node scripts/create-admin.mjs <email> <password> [name]');
  console.error('   or: ADMIN_EMAIL=<email> ADMIN_PASSWORD=<password> ADMIN_NAME=<name> node scripts/create-admin.mjs');
  process.exit(1);
}

const prisma = new PrismaClient();

try {
  const hash = await bcrypt.hash(password, 12);

  const user = await prisma.user.upsert({
    where: { email: email.toLowerCase() },
    update: { password: hash, role: 'ADMIN', isActive: true },
    create: {
      email: email.toLowerCase(),
      name: name ?? null,
      password: hash,
      role: 'ADMIN',
      isActive: true,
    },
  });

  console.log(`✓ Admin user ready: ${user.email} (id: ${user.id})`);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
} finally {
  await prisma.$disconnect();
}
