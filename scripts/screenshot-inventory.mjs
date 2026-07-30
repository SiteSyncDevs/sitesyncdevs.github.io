// Scans docs for screenshot placeholders and writes docs-planning/screenshot-inventory.csv.
// "captured" is auto-detected: Yes if a matching file exists in public/screenshots.
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync , mkdirSync} from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const DOCS = join(ROOT, 'src/content/docs');
const SHOTS = join(ROOT, 'public/screenshots');
const OUT = join(ROOT, 'docs-planning/screenshot-inventory.csv');
const EXTS = ['png', 'jpg', 'jpeg', 'webp', 'gif'];

function walk(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (/\.(md|mdx)$/.test(e)) acc.push(p);
  }
  return acc;
}

const rows = [['shot_id', 'product', 'viewport', 'caption', 'page', 'captured']];
const re = /<figure class="ss-shot"([^>]*)>\s*<figcaption>([\s\S]*?)<\/figcaption>/g;
const attr = (s, k) => (s.match(new RegExp(k + '="([^"]*)"')) || [])[1] || '';

for (const file of walk(DOCS)) {
  const text = readFileSync(file, 'utf8');
  let m;
  while ((m = re.exec(text))) {
    const id = attr(m[1], 'data-shot-id');
    const captured = EXTS.some((e) => id && existsSync(join(SHOTS, `${id}.${e}`))) ? 'Yes' : 'No';
    rows.push([
      id,
      attr(m[1], 'data-product'),
      attr(m[1], 'data-viewport'),
      m[2].replace(/\s+/g, ' ').trim().replace(/"/g, "'"),
      '/' + relative(DOCS, file).replace(/\\/g, '/').replace(/\.(md|mdx)$/, ''),
      captured,
    ]);
  }
}

const csv = rows.map((r) => r.map((c) => (/[",]/.test(c) ? '"' + c + '"' : c)).join(',')).join('\n') + '\n';
mkdirSync(new URL('../docs-planning', import.meta.url).pathname, { recursive: true });
writeFileSync(OUT, csv, 'utf8');
const needed = rows.slice(1).filter((r) => r[5] === 'No').length;
console.log('placeholders:', rows.length - 1, '| still needed:', needed);
