import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    readTime: z.string(),
    date: z.string(),
    author: z.string().default('AG Varmeteknikk'),
  }),
});

export const collections = {
  articles,
};
