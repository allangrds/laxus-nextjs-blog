import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { Layout } from '../../components'
import { configuration } from '../../config'
import {
  getAllPostsFromSerie,
  getCategoriesFromPosts,
  getSeriesFromPosts,
  getTagsFromPosts,
} from '../../lib/api'
import { PostList } from '../../templates'

const capitalizeFirstLetter = (str: string) => (
  str.charAt(0).toUpperCase() + str.slice(1)
)

const SeriesPosts: NextPage = ({
  categories, posts, serie, series, tags,
}) => (
  <>
    <NextSeo
      title={`${configuration.ui['posts-of']} ${capitalizeFirstLetter(serie.replace(/-/g, ' '))} | ${configuration.ui.header.title.text}`}
    />
    <Layout categories={categories} series={series} tags={tags}>
      <PostList
        posts={posts}
        title={`${configuration.ui['posts-of']} ${capitalizeFirstLetter(serie.replace(/-/g, ' '))}`}
      />
    </Layout>
  </>
)

export async function getStaticPaths () {
  const series = getSeriesFromPosts()
  const paths = series.map((serie) => ({ params: { slug: serie } }))

  return {
    fallback: false,
    paths,
  }
}

export async function getStaticProps ({ params }) {
  const { slug } = params

  const posts = getAllPostsFromSerie(slug)
  const categories = getCategoriesFromPosts()
  const series = getSeriesFromPosts()
  const tags = getTagsFromPosts()

  return {
    props: {
      categories,
      serie: slug,
      posts,
      series,
      tags,
    },
  }
}

export default SeriesPosts
