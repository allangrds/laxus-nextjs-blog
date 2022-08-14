import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { Layout } from '../components'
import { configuration } from '../config'
import {
  getAllPosts,
  getCategoriesFromPosts,
  getTagsFromPosts,
} from '../lib/api'
import { PostList } from '../templates'

const Home: NextPage = ({ categories, posts, tags }) => (
  <>
    <NextSeo
      title={`${configuration.ui.home} | ${configuration.ui.header.title.text}`}
    />
    <Layout categories={categories} tags={tags}>
      <PostList
        posts={posts}
      />
    </Layout>
  </>
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
