// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from './src/sidebar.mjs';
import remarkScreenshots from './plugins/remark-screenshots.mjs';

// https://astro.build/config
export default defineConfig({
  // The production URL. Update if the final path ever changes.
  site: 'https://docs.sitesync.cloud',

  // Base path. Default '/' is correct for the custom domain (docs.sitesync.cloud).
  // For TESTING at the GitHub project URL (sitesyncdevs.github.io/sitesync-docs/),
  // the deploy workflow sets SITE_BASE=/sitesync-docs so assets resolve at the
  // subpath. Remove that env from the workflow when the custom domain is live.
  base: process.env.SITE_BASE ?? '/',

  // Auto-resolve screenshot placeholders (see plugins/remark-screenshots.mjs):
  // drop a file named by its ID into public/screenshots/ and it appears.
  markdown: {
    remarkPlugins: [remarkScreenshots],
  },

  integrations: [
    starlight({
      title: 'SiteSync Docs',
      description:
        'Install, configure, and operate SiteSync — the LoRaWAN network server and device platform for Ignition.',
      logo: {
        src: './src/assets/logo.png',
        alt: 'SiteSync',
        replacesTitle: true,
      },
      customCss: ['./src/styles/custom.css'],
      // Component overrides:
      //  - PageTitle adds the "Applies to" applicability banner (from frontmatter)
      //  - Footer adds the per-page feedback control
      components: {
        PageTitle: './src/components/PageTitle.astro',
        Footer: './src/components/Footer.astro',
      },
      // Code blocks: keep the clean GitHub dark/light themes (like the
      // reference site) but frame them with a subtle SiteSync teal border.
      expressiveCode: {
        themes: ['github-dark', 'github-light'],
        styleOverrides: {
          borderColor: '#0D5C63',
          borderRadius: '0.5rem',
          codeFontFamily:
            "ui-monospace, 'SF Mono', 'Cascadia Code', 'JetBrains Mono', Menlo, Consolas, monospace",
        },
      },
      // Optional: add your repo/support links here.
      // social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sitesyncdevs' }],
      // Delete-proof, collapsed-by-default sidebar built from the files that exist.
      // See src/sidebar.mjs — deleting a page can never break the build again.
      sidebar,
    }),
  ],
});
