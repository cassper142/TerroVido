// Copies dist/en/* into dist/ after static build so the default
// locale (en) is served at root URLs without the /en/ prefix.
// Leaves /de/ untouched. Deletes dist/en/ to avoid duplicate content.

import {
  cp,
  existsSync,
  rm,
} from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const cpP = promisify(cp);
const rmP = promisify(rm);

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const distDir = join(root, 'dist');
const enDir = join(distDir, 'en');

if (!existsSync(enDir)) {
  console.warn('[postbuild] dist/en does not exist — skipping flatten.');
  process.exit(0);
}

console.log('[postbuild] Flattening dist/en → dist/ (default locale at root)');
await cpP(enDir, distDir, { recursive: true, force: true });

rmP(enDir, { recursive: true, force: true }).then(() => {
  console.log('[postbuild] Removed dist/en to avoid duplicates.');
});

console.log('[postbuild] Done. English locale is at root URLs.');
