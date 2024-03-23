import { z, defineCollection } from 'astro:content'

const writingsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        published: z.date(),
    }),
})

export const collections = {
    writings: writingsCollection,
}
