// Auto-resolves screenshot placeholders at build time.
//
// Authors leave a placeholder anywhere in a page:
//   <figure class="ss-shot" data-shot-id="EM-CONN-001" data-product="enterprise-management" data-viewport="desktop">
//   <figcaption>Caption text.</figcaption>
//   </figure>
//
// If public/screenshots/<id>.(png|jpg|jpeg|webp|gif) exists, the placeholder
// is replaced with the real image (click to open full size). If not, the
// dashed "Screenshot needed" placeholder is left as-is.
//
// Result: to add a screenshot you just drop a file named by its ID into
// public/screenshots/ — no code edit, no rebuild wiring.
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const EXTS = ['png', 'jpg', 'jpeg', 'webp', 'gif'];
const FIG_RE = /<figure class="ss-shot"([^>]*)>\s*<figcaption>([\s\S]*?)<\/figcaption>\s*<\/figure>/g;
const attr = (s, k) => (s.match(new RegExp(k + '="([^"]*)"')) || [])[1] || '';

export default function remarkScreenshots() {
  const publicDir = join(process.cwd(), 'public', 'screenshots');
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'html' && typeof node.value === 'string' && node.value.includes('ss-shot')) {
        node.value = node.value.replace(FIG_RE, (m, attrs, caption) => {
          const id = attr(attrs, 'data-shot-id');
          const cap = caption.replace(/\s+/g, ' ').trim();
          const ext = EXTS.find((e) => id && existsSync(join(publicDir, `${id}.${e}`)));
          if (!ext) return m; // no file yet — keep the placeholder
          const src = `/screenshots/${id}.${ext}`;
          return (
            `<figure class="ss-figure">` +
            `<a href="${src}" target="_blank" rel="noopener">` +
            `<img src="${src}" alt="${cap.replace(/"/g, '&quot;')}" loading="lazy" /></a>` +
            `<figcaption>${cap}</figcaption></figure>`
          );
        });
      }
      if (node.children) node.children.forEach(visit);
    };
    visit(tree);
  };
}
