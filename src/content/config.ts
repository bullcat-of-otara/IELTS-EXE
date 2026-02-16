import { defineCollection, z } from 'astro:content';

const writingCollection = defineCollection({
    type: 'content', // v2.5.0+
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.date().optional(),
        author: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    'writing': writingCollection,
};
