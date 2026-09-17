import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    name: z.string(),
    shortTitle: z.string(),
    category: z.enum(['professional', 'independent', 'research', 'personal-lab']),
    period: z.string(),
    status: z.string(),
    summary: z.string(),
    homepageSummary: z.string(),
    technologies: z.array(z.string()),
    labels: z.array(z.string()).default([]),
    externalUrl: z.url().optional(),
    sourceUrl: z.url().optional(),
    featured: z.boolean().default(false),
    homepageOrder: z.number().optional(),
    visualType: z.enum([
      'scale-diagram',
      'retrieval-graph',
      'module-map',
      'research-archive',
      'product-screens',
      'playful-product',
    ]),
    attributionNote: z.string().optional(),
    confidentialityNote: z.string().optional(),
    seoTitle: z.string(),
    seoDescription: z.string(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    categories: z.array(z.string()),
    readingMinutes: z.number().optional(),
    externalUrl: z.url().optional(),
    localArticle: z.boolean(),
    featured: z.boolean().default(false),
    seoDescription: z.string(),
  }),
});

export const collections = { work, writing };
