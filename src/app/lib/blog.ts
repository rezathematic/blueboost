import fs from 'fs'
import path from 'path'

import { BlogPostMetadata, BlogBreadcrumb } from './types'

const categories = [
  { name: 'Ecommerce SEO', slug: 'ecommerce-seo' },
  { name: 'Content Advice', slug: 'content-advice' },
  { name: 'Keyword Research', slug: 'keyword-research' },
  { name: 'Link Building', slug: 'link-building' },
  { name: 'Local SEO', slug: 'local-seo' },
  { name: 'Off-Page SEO', slug: 'off-page-seo' },
  { name: 'On-Page SEO', slug: 'on-page-seo' },
  { name: 'Technical SEO', slug: 'technical-seo' },
  { name: 'Other', slug: 'other' }
]

const authors = [
  {
    name: 'Reza Baharvand',
    image: '/reza-sm.jpg',
    role: 'Founder'
  },
  {
    name: 'Jane Doe',
    image: '/images/jane-doe.jpg',
    role: 'Designer'
  },
  {
    name: 'James Doe',
    image: '/images/james-doe.jpg',
    role: 'DevOps Engineer'
  },
  {
    name: 'Judy Doe',
    image: '/images/judy-doe.jpg',
    role: 'Product Manager'
  }
]

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  // let metadata: Partial<BlogPostMetadata> = {};
  let metadata: Partial<Record<keyof BlogPostMetadata, string | boolean>> = {}

  frontMatterLines.forEach(line => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    if (key.trim() === 'featured') {
      metadata[key.trim() as keyof BlogPostMetadata] =
        value.toLowerCase() === 'true'
    } else {
      metadata[key.trim() as keyof BlogPostMetadata] = value
    }
  })

  return { metadata: metadata as BlogPostMetadata, content }
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter(file => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

// function extractTweetIds(content: string): string[] {
//   let tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
//   return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || [];
// }

function extractTweetIds(content: string): string[] {
  const tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g)
  return (
    tweetMatches?.map(tweet => {
      const idMatch = tweet.match(/[0-9]+/g)
      return idMatch ? idMatch[0] : '' // Ensure we always return a string, even if match is null
    }) || []
  )
}

function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map(file => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = metadata.slug || path.basename(file, path.extname(file))
    let tweetIds = extractTweetIds(content)

    if (metadata.category) {
      const categoryMatch = categories.find(
        category => category.name === metadata.category
      )
      metadata.categorySlug = categoryMatch ? categoryMatch.slug : 'other'
    } else {
      // Set default category name and slug if no category is provided
      metadata.category = 'Other'
      metadata.categorySlug = 'other'
    }

    const authorMatch = authors.find(author => author.name === metadata.author)
    if (authorMatch) {
      metadata.authorImage = authorMatch.image
      metadata.authorRole = authorMatch.role
    } else {
      // Use default author values if no match is found
      metadata.author = 'Reza Baharvand'
      metadata.authorImage = '/reza-sm.jpg'
      metadata.authorRole = 'Founder'
    }

    const breadcrumbs: BlogBreadcrumb[] = [
      {
        name: 'Blog',
        href: '/blog',
        current: false
      },
      {
        name: metadata.category || 'Other',
        href: `/blog/category/${metadata.categorySlug || 'other'}`,
        current: false
      },
      {
        name: metadata.title,
        href: `/blog/${slug}`,
        current: true
      }
    ]

    return {
      metadata,
      slug,
      tweetIds,
      content,
      breadcrumbs
    }
  })
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'blog'))
}

export function getFeaturedBlogPosts(n: number) {
  // First, get all blog posts
  const allBlogPosts = getBlogPosts()

  const featuredPosts = allBlogPosts
    .filter(post => post.metadata.featured) // Filter only featured posts
    .sort(
      (a, b) =>
        new Date(b.metadata.updatedAt).getTime() -
        new Date(a.metadata.updatedAt).getTime()
    )
    .slice(0, n)

  return featuredPosts
}

// export function getAvailableCategories() {
//   const allBlogPosts = getBlogPosts();
//   const categorySet = new Set(); // Use a set to store unique category slugs

//   allBlogPosts.forEach((post) => {
//     const { category, categorySlug } = post.metadata;

//     if (category && categorySlug) {
//       categorySet.add(
//         JSON.stringify({
//           name: category,
//           slug: `/blog/category/${categorySlug}`,
//         })
//       ); // Stringify to allow objects in Set
//     }
//   });

//   // Convert the Set back to an array of objects
//   const uniqueCategories = Array.from(categorySet).map((item) =>
//     JSON.parse(item)
//   );

//   return uniqueCategories;
// }

type Category = {
  name: string
  slug: string
}

export function getAvailableCategories(): Category[] {
  const allBlogPosts = getBlogPosts()
  const categoriesMap = new Map<string, Category>() // Use a Map to maintain unique categories

  allBlogPosts.forEach(({ metadata }) => {
    const { category, categorySlug } = metadata

    if (category && categorySlug && !categoriesMap.has(categorySlug)) {
      categoriesMap.set(categorySlug, {
        name: category,
        slug: `/blog/category/${categorySlug}`
      })
    }
  })

  // Convert the Map values to an array
  return Array.from(categoriesMap.values())
}

export function getPostsByCategorySlug(categorySlug: string) {
  const allBlogPosts = getBlogPosts()

  // Filter posts by the given category slug
  const filteredPosts = allBlogPosts.filter(
    post => post.metadata.categorySlug === categorySlug
  )

  // Map the filtered posts to the desired structure
  const posts = filteredPosts.map(post => ({
    name: post.metadata.title,
    slug: `/blog/${post.slug}`,
    categoryName: post.metadata.category
  }))

  return posts
}
