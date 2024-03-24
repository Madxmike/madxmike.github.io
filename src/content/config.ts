import { rssSchema } from '@astrojs/rss'
import { z, defineCollection } from 'astro:content'

const writingsCollection = defineCollection({
    type: 'content',
    schema: rssSchema,
})

export const collections = {
    writings: writingsCollection,
}
