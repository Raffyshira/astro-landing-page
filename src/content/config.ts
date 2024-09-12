import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: "content",
    // Type-check frontmatter using a schema
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            author: z.string(),
            tags: z.array(z.string()),
            // Transform string to Date object
            pubDate: z
                .string()
                .or(z.date())
                .transform(val => new Date(val)),
            cover: image().refine(img => img.width >= 600, {
                message: "Cover image must be at least 600 pixels wide!"
            })
        })
});

export const collections = { blog };
