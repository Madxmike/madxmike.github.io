import { rssSchema } from '@astrojs/rss'
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content'

export const Series = {
    Calli: "Calli"
}

export const Part = {
    One: '1',
    Two: '2',
    Three: '3',
}

const seriesEntrySchema = z.object({
    seriesEntry: z.object({
        of: z.nativeEnum(Series),
        part: z.nativeEnum(Part)
    }).optional()
}).optional();


const writingsCollection = defineCollection({
    type: 'content',
    schema: z.intersection(rssSchema, seriesEntrySchema)
})

export const collections = {
    writings: writingsCollection,
}
