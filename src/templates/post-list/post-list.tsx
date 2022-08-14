import * as React from 'react'

import {
  Box, Heading, Text, VStack,
} from '@chakra-ui/react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { PostItem } from '../../components'
import { configuration } from '../../config'

export const PostList = ({ posts, title }) => {
  const sortedPosts = posts.sort((post1, post2) => (
    new Date(post1.date) > new Date(post2.date) ? -1 : 1))

  const [count, setCount] = React.useState({
    next: configuration.logic['posts-pagination-quantity'],
    prev: 0,
  })
  const [hasMore, setHasMore] = React.useState(true)
  const [current, setCurrent] = React.useState(
    sortedPosts.slice(count.prev, count.next)
  )

  const getMoreData = () => {
    if (current.length === sortedPosts.length) {
      setHasMore(false)
      return
    }

    setCurrent(
      current.concat(sortedPosts.slice(
        count.prev + configuration.logic['posts-pagination-quantity'],
        count.next + configuration.logic['posts-pagination-quantity']
      ))
    )

    setCount((prevState) => ({
      next: prevState.next + configuration.logic['posts-pagination-quantity'],
      prev: prevState.prev + configuration.logic['posts-pagination-quantity'],
    }))
  }

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
      <InfiniteScroll
        dataLength={current.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={sortedPosts.length <= configuration.logic['posts-pagination-quantity'] ? '' : <Text fontWeight="700">Loading...</Text>}
        endMessage={(
          <Text fontWeight="700">Yay! You have seen it all</Text>
        )}
      >
        <VStack
          gap="10"
          paddingY="8"
        >
          {
            current.map((post) => (
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
      </InfiniteScroll>
    </Box>
  )
}
