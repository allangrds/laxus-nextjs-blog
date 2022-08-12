import type { NextPage } from 'next'

import { Layout } from '../../components'
import { configuration } from '../../config'
import {
  getAllPostsFromCategory,
  getCategoriesFromPosts,
  getTagsFromPosts,
} from '../../lib/api'
import { PostList } from '../../templates'

const capitalizeFirstLetter = (str: string) => (
  str.charAt(0).toUpperCase() + str.slice(1)
)

const CategoriesPosts: NextPage = ({
  categories, category, posts, tags,
}) => (
  <Layout categories={categories} tags={tags}>
    <PostList
      posts={posts}
      title={`${configuration.ui['posts-of']} ${capitalizeFirstLetter(category)}`}
    />
  </Layout>
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
  const tags = getTagsFromPosts()

  return {
    props: {
      categories,
      category: slug,
      posts,
      tags,
    },
  }
}

export default CategoriesPosts
