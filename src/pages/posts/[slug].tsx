// import rehypeToc from '@jsdevtools/rehype-toc'
import type { NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
// import { renderToString } from 'react-dom/server'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'

import { getAllPosts, getPostBySlug } from '../../lib/api'
import { PostDetail } from '../../templates'

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
  const content = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, {
          behavior: 'wrap',
        }],
        // rehypeToc,
        rehypeCodeTitles,
        rehypePrism,
      ],
    },
  })

  // const contentString = renderToString(content)

  console.log(content)

  return {
    props: {
      ...post,
      content,
    },
  }
}
