import { Box, Heading, VStack } from '@chakra-ui/react'

import { PostItem } from '../../components'

export const PostList = ({ posts, title }) => {
  const sortedPosts = posts.sort((post1, post2) => (
    new Date(post1.date) > new Date(post2.date) ? -1 : 1))

  return (
    <Box
      maxWidth="container.lg"
      width="100%"
      paddingX="6"
    >
      {
        title
          ? (
            <Heading as="h1" fontSize="2xl" marginTop="7">
              { title }
            </Heading>
          )
          : undefined
      }

      <VStack
        gap="10"
        paddingY="8"
      >
        {
          sortedPosts.map((post) => (
            <PostItem
              key={post.slug}
              excerpt={post.frontmatter.excerpt}
              subtitle={post.frontmatter.subtitle}
              categories={post.frontmatter.categories}
              tags={post.frontmatter.tags}
              title={post.frontmatter.title}
              slug={post.slug}
            />
          ))
        }
      </VStack>
    </Box>
  )
}
