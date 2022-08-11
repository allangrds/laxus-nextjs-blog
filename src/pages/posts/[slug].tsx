import type { NextPage } from 'next'

import { Layout } from '../../components'
import {
  getAllPosts,
  getPostDetail,
} from '../../lib/api'
import { PostDetail } from '../../templates'

const PostsSlug: NextPage = ({ categories, post, tags }) => (
  <Layout categories={categories} tags={tags}>
    <PostDetail post={post} />
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

  return {
    props: post,
  }
}
