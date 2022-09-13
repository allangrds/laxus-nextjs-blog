import type { GetStaticProps, NextPage } from 'next'

import { Layout } from '../../components'
import {
  getAllPosts,
  getPostDetail,
} from '../../lib/api'
import { PostDetail } from '../../templates'

const PostsSlug: NextPage = ({
  categories, host, post, series, slug, tags,
}) => (
  <Layout categories={categories} series={series} tags={tags}>
    <PostDetail host={host} post={post} slug={slug} />
  </Layout>
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
  const post = await getPostDetail(slug)
  const host = process.env.HOST || null

  return {
    props: {
      host,
      ...post,
      slug,
    },
  }
}
