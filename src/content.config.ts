import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const locale = z.enum(['en', 'zh', 'ko', 'es']);

const neighborhoods = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/neighborhoods' }),
  schema: z.object({
    slug: z.string(),
    locale,
    city: z.string(),
    county: z.string(),
    title: z.string(),
    description: z.string(),
    medianPrice: z.number().optional(),
    schoolDistrict: z.string().optional(),
    zips: z.array(z.string()),
    heroImage: z.string().optional(),
    updated: z.date()
  })
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/services' }),
  schema: z.object({
    slug: z.string(),
    locale,
    track: z.enum(['sales', 'commercial', 'property-management']),
    title: z.string(),
    description: z.string(),
    order: z.number().default(0)
  })
});

export const collections = { neighborhoods, services };
