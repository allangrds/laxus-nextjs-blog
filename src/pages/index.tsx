import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { Layout } from '../components'
import { configuration } from '../config'
import {
  getAllPosts,
  getCategoriesFromPosts,
  getSeriesFromPosts,
  getTagsFromPosts,
} from '../lib/api'
import { PostList } from '../templates'

const Home: NextPage = ({
  categories, posts, series, tags,
}) => (
  <>
    <NextSeo
      title={`${configuration.ui.home} | ${configuration.ui.header.title.text}`}
    />
    <Layout categories={categories} series={series} tags={tags}>
      <PostList
        posts={posts}
      />
    </Layout>
  </>
)

export async function getStaticProps () {
  const posts = getAllPosts()
  const categories = getCategoriesFromPosts()
  const series = getSeriesFromPosts()
  const tags = getTagsFromPosts()

  return {
    props: {
      categories,
      posts,
      series,
      tags,
    },
  }
}

export default Home
