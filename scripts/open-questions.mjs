// Scans docs for flagged items (:::note / :::caution asides whose text asks
// for confirmation or missing source) and writes docs-planning/open-questions.md.
import { readdirSync, readFileSync, writeFileSync, statSync , mkdirSync} from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const DOCS = join(ROOT, 'src/content/docs');
const OUT = join(ROOT, 'docs-planning/open-questions.md');

const FLAG = /needs (input|confirmation|source)|confirm with|behavior needs confirmation|needs source material/i;

function walk(dir, acc = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (/\.(md|mdx)$/.test(e)) acc.push(p);
  }
  return acc;
}

const asideRe = /:::(note|caution|danger)(?:\[([^\]]*)\])?\n([\s\S]*?):::/g;
const items = [];
for (const file of walk(DOCS)) {
  const text = readFileSync(file, 'utf8');
  const page = '/' + relative(DOCS, file).replace(/\\/g, '/').replace(/\.(md|mdx)$/, '');
  let m;
  while ((m = asideRe.exec(text))) {
    const [, , title = '', body] = m;
    const text = body.replace(/\s+/g, ' ').trim();
    if (FLAG.test(title + ' ' + text)) items.push({ page, title: title || '(untitled)', text });
  }
}

items.sort((a, b) => a.page.localeCompare(b.page));

const lines = [
  '# Open questions — facts to confirm before pages leave draft',
  '',
  `_Auto-generated from in-page flags. Last run: ${new Date().toISOString().slice(0, 10)}._`,
  '',
  'Re-run with `node scripts/open-questions.mjs` after editing pages.',
  '',
  '## Cross-cutting (from the conflict log)',
  '',
  '- [ ] **Battery thresholds** — confirm the values actually implemented in 1.0.0 (docs use the Release Notes values: Good ≥ 3.2 V, Warning 3.0–<3.2 V, Critical < 3.0 V) and correct the Health Metrics Reference PDF.',
  '- [ ] **Product family** — confirm the canonical list. Release Notes cite Standard, Enterprise, Enterprise Management, Field App, Edge, and Multitenant Portal; docs currently scope to Standard + Enterprise Management + Field App.',
  '',
  `## Per-page flags (${items.length})`,
  '',
];
for (const it of items) {
  lines.push(`- [ ] **${it.page}** — ${it.title !== '(untitled)' ? it.title + ': ' : ''}${it.text}`);
}
lines.push('');
mkdirSync(new URL('../docs-planning', import.meta.url).pathname, { recursive: true });
writeFileSync(OUT, lines.join('\n'), 'utf8');
console.log('flagged items:', items.length);
console.log('written:', OUT);
