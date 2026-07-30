// Scaffold a new documentation page with correct frontmatter.
// Usage:
//   node scripts/new-page.mjs <path-under-docs> "Title" <contentType> <products-csv> [roles-csv]
// Example:
//   node scripts/new-page.mjs configure/sites/archive-a-site "Archive a site" task enterprise-management administrator
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const [, , path, title, ct = 'concept', products = '', roles = ''] = process.argv;
if (!path || !title) {
  console.error('Usage: node scripts/new-page.mjs <path> "Title" <contentType> <products-csv> [roles-csv]');
  process.exit(1);
}
const list = (s) => '[' + s.split(',').filter(Boolean).map((x) => `"${x.trim()}"`).join(', ') + ']';
const today = new Date().toISOString().slice(0, 10);
const bodies = {
  concept: '## Definition\n\n_Draft._\n\n## Why it matters\n\n## How SiteSync uses it\n\n## Product differences\n\n## Related tasks\n',
  task: '## Goal\n\n_Draft._\n\n## Before you begin\n\n:::note[Prerequisites needed]\nList prerequisites.\n:::\n\n## Steps\n\n1. _Step one._\n\n## Expected result\n\n## Verify\n\n## Troubleshooting\n\n## Related pages\n',
  reference: '## Purpose\n\n_Draft._\n\n## Reference\n\n| Field | Type | Required | Description | Example |\n| - | - | - | - | - |\n| _..._ | | | | |\n\n## Version notes\n',
  troubleshooting: '## What this means\n\n_Draft._\n\n## Most likely causes\n\n## Check these first\n\n## Resolution\n\n## Verify the fix\n\n## Related pages\n',
  integration: '## Supported versions\n\n_Draft._\n\n## MQTT connection\n\n## Join Server (API) connection\n\n## Test connectivity\n\n## Troubleshoot\n',
  overview: '_Draft — short orientation, then links to key pages._\n',
};
const fm = ['---', `title: "${title}"`, `description: "${title} — SiteSync documentation."`,
  `products: ${list(products)}`, `roles: ${list(roles)}`, 'introduced: "1.0.0"',
  `contentType: "${ct}"`, 'status: "draft"', `lastReviewed: "${today}"`, '---', ''].join('\n');
const file = join(ROOT, 'src/content/docs', path + '.md');
if (existsSync(file)) { console.error('Already exists:', file); process.exit(1); }
mkdirSync(dirname(file), { recursive: true });
writeFileSync(file, fm + '\n' + (bodies[ct] || bodies.concept), 'utf8');
console.log('created', file);
console.log('remember to add it to the sidebar in the generator or src/sidebar.mjs');
