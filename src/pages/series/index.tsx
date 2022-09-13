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
  getSeriesFromPosts,
  getTagsFromPosts,
} from '../../lib/api'

const Series: NextPage = ({ categories, series, tags }) => (
  <>
    <NextSeo
      title={`${configuration.ui.categories} | ${configuration.ui.header.title.text}`}
    />
    <Layout categories={categories} series={series} tags={tags}>
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
            { configuration.ui.series }
          </Heading>
          <Box>
            <UnorderedList listStyleType="none">
              {
              series.map((serie: string) => (
                <ListItem>
                  <Link href={`/series/${serie}`}>
                    <Text
                      as="a"
                      cursor="pointer"
                      textTransform="capitalize"
                      fontSize="xl"
                      lineHeight="8"
                    >
                      { serie.replace(/-/g, ' ') }
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
  const series = getSeriesFromPosts()
  const tags = getTagsFromPosts()

  return {
    props: {
      categories,
      series,
      tags,
    },
  }
}

export default Series
