import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      // Custom front-matter fields that drive the applicability banner,
      // feedback control, and content governance.
      extend: z.object({
        products: z.array(z.string()).default([]),
        roles: z.array(z.string()).default([]),
        introduced: z.string().optional(),
        contentType: z.string().optional(),
        // Accept a plain string ("2026-07-30") or a YAML date (the CMS date
        // picker emits an unquoted date, which parses to a Date object).
        lastReviewed: z.union([z.string(), z.date()]).optional(),
        owner: z.string().optional(),
      }),
    }),
  }),
};
