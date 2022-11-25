import fs from 'fs'
import { join } from 'path'

import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism'
import rehypeSlug from 'rehype-slug'

import { rehypeMetaAttribute } from './rehype-meta-attributes'
import remarkTocHeadings from './remark-toc-headings'

const postsDirectory = join(process.cwd(), 'posts')
const onlyUnique = (value, index, self) => (
  self.indexOf(value) === index
)

export function getPostBySlug (slug: string) {
  if (!slug) {
    return null
  }

  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(postsDirectory, `${realSlug}/index.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content, data } = matter(fileContents)

  const date = format(new Date(data.date), 'MMMM, dd, yyyy')

  return {
    content,
    fileContents,
    frontmatter: {
      ...data,
      parsedData: date,
    },
    slug: realSlug,
  }
}

export function getAllPosts () {
  const slugs = fs.readdirSync(postsDirectory)

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (
      new Date(post1?.frontmatter.date) > new Date(post2.frontmatter.date)
        ? -1
        : 1
    ))

  return posts
}

export function getCategoriesFromPosts () {
  const posts = getAllPosts()
  const allCategories = posts
    .map((post) => post.frontmatter.categories)
    .flat()
  const uniqueCategories = allCategories.filter(onlyUnique)

  return uniqueCategories
}

export function getSeriesFromPosts () {
  const posts = getAllPosts()
  const allSeries = posts
    .map((post) => post.frontmatter.series)
    .flat()
  const uniqueSeries = allSeries.filter(onlyUnique)

  return uniqueSeries
}

export function getTagsFromPosts (): string[] {
  const posts = getAllPosts()
  const allTags = posts
    .map((post) => post.frontmatter.tags)
    .flat()
  const uniqueTags = allTags.filter(onlyUnique)

  return uniqueTags
}

export const getPostDetail = async (slug: string) => {
  const post = getPostBySlug(slug)
  const categories = getCategoriesFromPosts()
  const series = getSeriesFromPosts()
  const tags = getTagsFromPosts()
  const toc = []

  const { code, frontmatter } = await bundleMDX({
    source: post?.fileContents,
    mdxOptions (options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeMetaAttribute,
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypePrism,
      ]
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        [remarkTocHeadings, { exportRef: toc }],
      ]

      return options
    },
  })

  return {
    categories,
    post: {
      content: code,
      frontmatter: post?.frontmatter,
      toc,
    },
    series,
    tags,
  }
}

export function getAllPostsFromTag (slug: string) {
  const posts = getAllPosts()
  const filteredPosts = posts.filter((post) => (
    post.frontmatter.tags.some(
      (element: string) => element === slug
    )
  ))

  return filteredPosts
}

export function getAllPostsFromCategory (slug: string) {
  const posts = getAllPosts()
  const filteredPosts = posts.filter((post) => (
    post.frontmatter.categories.some(
      (element: string) => element === slug
    )
  ))

  return filteredPosts
}

export function getAllPostsFromSerie (slug: string) {
  const posts = getAllPosts()

  const filteredPosts = posts.filter((post) => (
    post.frontmatter.series === slug
  ))

  return filteredPosts
}
