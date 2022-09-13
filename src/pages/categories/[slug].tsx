import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { Layout } from '../../components'
import { configuration } from '../../config'
import {
  getAllPostsFromCategory,
  getCategoriesFromPosts,
  getSeriesFromPosts,
  getTagsFromPosts,
} from '../../lib/api'
import { PostList } from '../../templates'

const capitalizeFirstLetter = (str: string) => (
  str.charAt(0).toUpperCase() + str.slice(1)
)

const CategoriesPosts: NextPage = ({
  categories, category, posts, series, tags,
}) => (
  <>
    <NextSeo
      title={`${configuration.ui['posts-of']} ${capitalizeFirstLetter(category)} | ${configuration.ui.header.title.text}`}
    />
    <Layout categories={categories} series={series} tags={tags}>
      <PostList
        posts={posts}
        title={`${configuration.ui['posts-of']} ${capitalizeFirstLetter(category)}`}
      />
    </Layout>
  </>
)

export async function getStaticPaths () {
  const categories = getCategoriesFromPosts()
  const paths = categories.map((category) => ({ params: { slug: category } }))

  return {
    fallback: false,
    paths,
  }
}

export async function getStaticProps ({ params }) {
  const { slug } = params

  const posts = getAllPostsFromCategory(slug)
  const categories = getCategoriesFromPosts()
  const series = getSeriesFromPosts()
  const tags = getTagsFromPosts()

  return {
    props: {
      categories,
      category: slug,
      posts,
      series,
      tags,
    },
  }
}

export default CategoriesPosts
