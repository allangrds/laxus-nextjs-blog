import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { Layout } from '../../components'
import { configuration } from '../../config'
import {
  getAllPostsFromTag,
  getCategoriesFromPosts,
  getSeriesFromPosts,
  getTagsFromPosts,
} from '../../lib/api'
import { PostList } from '../../templates'

const capitalizeFirstLetter = (str: string) => (
  str.charAt(0).toUpperCase() + str.slice(1)
)

const TagsPosts: NextPage = ({
  categories, posts, series, tag, tags,
}) => (
  <>
    <NextSeo
      title={`${configuration.ui['posts-of']} ${capitalizeFirstLetter(tag)} | ${configuration.ui.header.title.text}`}
    />
    <Layout categories={categories} series={series} tags={tags}>
      <PostList
        posts={posts}
        title={`${configuration.ui['posts-of']} ${capitalizeFirstLetter(tag)}`}
      />
    </Layout>
  </>
)

export async function getStaticPaths () {
  const tags = getTagsFromPosts()
  const paths = tags.map((tag) => ({ params: { slug: tag } }))

  return {
    fallback: false,
    paths,
  }
}

export async function getStaticProps ({ params }) {
  const { slug } = params

  const posts = getAllPostsFromTag(slug)
  const categories = getCategoriesFromPosts()
  const series = getSeriesFromPosts()
  const tags = getTagsFromPosts()

  return {
    props: {
      categories,
      posts,
      series,
      tag: slug,
      tags,
    },
  }
}

export default TagsPosts
