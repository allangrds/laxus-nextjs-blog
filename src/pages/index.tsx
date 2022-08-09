import type { NextPage } from 'next'

import { getAllPosts } from '../lib/api'
import { PostList } from '../templates'

const Home: NextPage = ({ posts }) => (
  <PostList posts={posts} />
)

export async function getStaticProps () {
  const posts = getAllPosts()

  return {
    props: {
      posts,
    },
  }
}

export default Home
