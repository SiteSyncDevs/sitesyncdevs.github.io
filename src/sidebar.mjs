// Delete-proof sidebar: built at load time from the files that ACTUALLY exist
// in src/content/docs. Deleting or adding a page updates the nav automatically
// and can never reference a missing page (so it can't break the build).
// Labels come from each page's frontmatter `title`; folder labels from the map
// below (falling back to a humanized folder name). All groups start collapsed.
import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, relative } from 'node:path';

const DOCS = fileURLToPath(new URL('./content/docs', import.meta.url));

// Top-level sections, in the order they should appear.
const SECTIONS = [
  ['getting-started', 'Get started'],
  ['products', 'Products'],
  ['install-upgrade', 'Install & upgrade'],
  ['configure', 'Configure'],
  ['use', 'Use SiteSync'],
  ['troubleshoot', 'Monitor & troubleshoot'],
  ['reference', 'Technical reference'],
  ['release-notes', 'Release notes'],
  ['support', 'Support'],
];

// Nice labels for folders whose auto-formatted name isn't quite right.
const FOLDER_LABELS = {
  'udts-and-tags': 'UDTs and tags',
  api: 'API',
  'field-app': 'Field App',
  'enterprise-management': 'Enterprise Management',
  'identity-access': 'Identity and access',
  upgrade: 'Upgrade SiteSync',
};

const humanize = (seg) =>
  FOLDER_LABELS[seg] ?? seg.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());

function metaOf(file) {
  const text = readFileSync(file, 'utf8');
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  let title = null;
  let draft = false;
  if (fm) {
    const t = fm[1].match(/^title:\s*["']?(.*?)["']?\s*$/m);
    if (t && t[1]) title = t[1];
    draft = /^draft:\s*true\s*$/m.test(fm[1]);
  }
  return { title, draft };
}

// Build the items for a directory: pages first (by title), then subfolders (by label).
function buildDir(dir) {
  const pages = [];
  const groups = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) {
      const items = buildDir(p);
      if (items.length) groups.push({ label: humanize(entry), collapsed: true, items });
    } else if (entry.endsWith('.md')) {
      const { title, draft } = metaOf(p);
      // Draft pages are excluded from production builds, so keep them out of the
      // sidebar too (otherwise a hidden page would be a broken link in prod).
      if (draft) continue;
      const slug = relative(DOCS, p).replace(/\\/g, '/').replace(/\.md$/, '');
      pages.push({ label: title ?? entry.replace(/\.md$/, ''), slug });
    }
  }
  pages.sort((a, b) => a.label.localeCompare(b.label));
  groups.sort((a, b) => a.label.localeCompare(b.label));
  return [...pages, ...groups];
}

export const sidebar = SECTIONS.filter(([dir]) => existsSync(join(DOCS, dir))).map(
  ([dir, label]) => ({ label, collapsed: true, items: buildDir(join(DOCS, dir)) })
);
