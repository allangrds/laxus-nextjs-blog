import {
  Box, Heading, Text, VStack,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import { Layout } from '../components'
import { configuration } from '../config'
import {
  getCategoriesFromPosts,
  getTagsFromPosts,
} from '../lib/api'

const About: NextPage = ({ categories, tags }) => (
  <>
    <NextSeo
      title={`${configuration.ui.about} | ${configuration.ui.header.title.text}`}
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
            { configuration.ui.about }
          </Heading>
          <Box>
            <Text>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Text>
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

export default About
