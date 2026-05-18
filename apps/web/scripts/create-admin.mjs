/**
 * Creates the first admin user in the database.
 *
 * Usage:
 *   node scripts/create-admin.mjs <email> <password> [name]
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

const [,, email, password, name] = process.argv;

if (!email || !password) {
  console.error('Usage: node scripts/create-admin.mjs <email> <password> [name]');
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
