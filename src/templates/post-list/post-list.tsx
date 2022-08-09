import { Heading, VStack } from '@chakra-ui/react'

import { PostItem } from '../../components'

export const PostList = ({ posts }) => {
  const sortedPosts = posts.sort((post1, post2) => (
    new Date(post1.date) > new Date(post2.date) ? -1 : 1))

  return (
    <VStack
      gap="10"
    >
      <Heading
        width="100%"
        as="h1"
        fontSize="2xl"
      >
        Post
      </Heading>
      {
        sortedPosts.map((post) => (
          <PostItem
            key={post.slug}
            excerpt={post.frontmatter.excerpt}
            subtitle={post.frontmatter.subtitle}
            tags={post.frontmatter.tags}
            title={post.frontmatter.title}
            slug={post.slug}
          />
        ))
      }
    </VStack>
  )
}
