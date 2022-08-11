import type { NextPage } from 'next'

import { Layout } from '../components'
import {
  getAllPosts,
  getCategoriesFromPosts,
  getTagsFromPosts,
} from '../lib/api'
import { PostList } from '../templates'

const Home: NextPage = ({ categories, posts, tags }) => (
  <Layout categories={categories} tags={tags}>
    <PostList
      posts={posts}
    />
  </Layout>
)

export async function getStaticProps () {
  const posts = getAllPosts()
  const categories = getCategoriesFromPosts()
  const tags = getTagsFromPosts()

  return {
    props: {
      categories,
      posts,
      tags,
    },
  }
}

export default Home
