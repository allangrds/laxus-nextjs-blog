import fs from 'fs'
import { join } from 'path'

import { format } from 'date-fns'
import { pt } from 'date-fns/locale'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), 'posts')

export function getPostBySlug (slug: string) {
  if (!slug) {
    return null
  }

  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(postsDirectory, `${realSlug}/index.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content, data } = matter(fileContents)

  const date = format(new Date(data.date), "dd 'de' MMMM 'de' yyyy", {
    locale: pt,
  })

  return {
    content,
    date: data.date.toString(),
    frontmatter: { ...data, date },
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
