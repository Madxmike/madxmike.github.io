import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context: { site: any }) {
    const writings = await getCollection('writings')
    return rss({
        // `<title>` field in output xml
        title: "Michael Epps's Blog",
        // `<description>` field in output xml
        description: 'Talking about Software, Life, and the Universe.',
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#contextsite
        site: context.site,
        // Array of `<item>`s in output xml
        // See "Generating items" section for examples using content collections and glob imports
        items: writings.map((writing) => ({
            title: writing.data.title,
            pubDate: writing.data.pubDate,
            description: writing.data.description,
            customData: writing.data.customData,
            // Compute RSS link from post `slug`
            // This example assumes all posts are rendered as `/blog/[slug]` routes
            link: `/writings/${writing.slug}/`,
        })),
        // (optional) inject custom xml
        customData: `<language>en-us</language>`,
    })
}
