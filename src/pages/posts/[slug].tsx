import path from 'path'

import { bundleMDX } from 'mdx-bundler'
import type { NextPage } from 'next'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

// import remarkCodeTitles from 'remark-code-titles'
import remarkPrism from 'remark-prism'

import { getAllPosts, getPostBySlug } from '../../lib/api'
import { PostDetail } from '../../templates'

import remarkCodeTitles from './remark-code-title'
import remarkTocHeadings from './remark-toc-headings'

const root = process.cwd()

const PostsSlug: NextPage = (post) => (
  <PostDetail post={post} />
)

export default PostsSlug

export async function getStaticPaths () {
  const posts = getAllPosts()
  const paths = posts.map(({ slug }) => ({ params: { slug } }))

  return {
    fallback: false,
    paths,
  }
}

export async function getStaticProps ({ params }) {
  const { slug } = params
  const post = getPostBySlug(slug)
  const toc = []

  const { code, frontmatter } = await bundleMDX({
    source: post?.content,
    cwd: path.join(root),
    mdxOptions (options) {
      options.remarkPlugins = [
        remarkPrism,
        remarkCodeTitles,
        [remarkTocHeadings, { exportRef: toc }],
      ]
      options.rehypePlugins = [
        rehypeSlug,
        rehypeAutolinkHeadings,
      ]

      return options
    },
  })

  return {
    props: {
      content: code,
      frontmatter: post?.frontmatter,
      toc,
    },
  }
}
