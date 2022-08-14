import {
  Box, Heading, ListItem, Text, UnorderedList, VStack,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

import { Layout } from '../../components'
import { configuration } from '../../config'
import {
  getCategoriesFromPosts,
  getTagsFromPosts,
} from '../../lib/api'

const Home: NextPage = ({ categories, tags }) => (
  <>
    <NextSeo
      title={`${configuration.ui.categories} | ${configuration.ui.header.title.text}`}
    />
    <Layout categories={categories} tags={tags}>
      <Box
        maxWidth="container.lg"
        width="100%"
        paddingX="6"
      >
        <VStack
          gap="4"
          paddingY="8"
          alignItems="flex-start"
        >
          <Heading as="h1" fontSize="2xl">
            { configuration.ui.categories }
          </Heading>
          <Box>
            <UnorderedList listStyleType="none">
              {
              categories.map((category) => (
                <ListItem>
                  <Link href={`/categories/${category}`}>
                    <Text
                      as="a"
                      cursor="pointer"
                      textTransform="capitalize"
                      fontSize="xl"
                      lineHeight="8"
                    >
                      { category }
                    </Text>
                  </Link>
                </ListItem>
              ))
            }
            </UnorderedList>
          </Box>
        </VStack>
      </Box>
    </Layout>
  </>
)

export async function getStaticProps () {
  const categories = getCategoriesFromPosts()
  const tags = getTagsFromPosts()

  return {
    props: {
      categories,
      tags,
    },
  }
}

export default Home
