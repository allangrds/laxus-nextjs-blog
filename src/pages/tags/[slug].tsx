import type { NextPage } from 'next'

import { Layout } from '../../components'
import { configuration } from '../../config'
import {
  getAllPostsFromTag,
  getCategoriesFromPosts,
  getTagsFromPosts,
} from '../../lib/api'
import { PostList } from '../../templates'

const capitalizeFirstLetter = (str: string) => (
  str.charAt(0).toUpperCase() + str.slice(1)
)

const TagsPosts: NextPage = ({
  categories, posts, tag, tags,
}) => (
  <Layout categories={categories} tags={tags}>
    <PostList
      posts={posts}
      title={`${configuration.ui['posts-of']} ${capitalizeFirstLetter(tag)}`}
    />
  </Layout>
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
  const tags = getTagsFromPosts()

  return {
    props: {
      categories,
      posts,
      tag: slug,
      tags,
    },
  }
}

export default TagsPosts