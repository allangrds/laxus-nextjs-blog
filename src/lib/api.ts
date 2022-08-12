import fs from 'fs'
import path, { join } from 'path'

import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

// import remarkCodeTitles from 'remark-code-titles'
import remarkPrism from 'remark-prism'

import remarkCodeTitles from './remark-code-title'
import remarkTocHeadings from './remark-toc-headings'

const root = process.cwd()
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

  // const date = format(new Date(data.date), "dd 'de' MMMM 'de' yyyy", {
  //   locale: pt,
  // })

  return {
    content,
    // date: data.date.toString(),
    fileContents,
    // frontmatter: { ...data, date },
    frontmatter: data,
    slug: realSlug,
  }
}

export function getAllPosts () {
  const slugs = fs.readdirSync(postsDirectory)

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (
      new Date(post1.date) > new Date(post2.date) ? -1 : 1))

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
  const tags = getTagsFromPosts()
  const toc = []

  const { code, frontmatter } = await bundleMDX({
    source: post?.content,
    cwd: path.join(root),
    mdxOptions (options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkPrism,
        remarkCodeTitles,
        [remarkTocHeadings, { exportRef: toc }],
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
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
