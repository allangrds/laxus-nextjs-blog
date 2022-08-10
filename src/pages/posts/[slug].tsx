import mdxPrism from 'mdx-prism'
import type { NextPage } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import remarkAutolinkHeadings from 'remark-autolink-headings'
import remarkCodeTitles from 'remark-code-titles'
import remarkPrism from 'remark-prism'
import remarkSlug from 'remark-slug'

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
      // rehypePlugins: [mdxPrism],
      remarkPlugins: [
        remarkAutolinkHeadings,
        remarkSlug,
        [remarkPrism, {
          plugins: [
            'line-numbers',
          ],
        }],
        remarkCodeTitles,
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
