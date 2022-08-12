/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Box, HStack, Heading, Text,
} from '@chakra-ui/react'
import Link from 'next/link'

import { Badge } from '../badge'

export type PostItemProps = {
  categories: string[];
  excerpt?: string;
  subtitle?: string;
  slug: string;
  tags: string[];
  title: string;
}

export const PostItem = ({
  categories, excerpt, slug, subtitle, tags, title,
}: PostItemProps) => (
  <Box as="article">
    <Link href={`posts/${slug}`}>
      <a style={{ width: '100%' }}>
        <Heading
          as="h1"
          fontSize="xl"
          fontWeight="700"
          color="black"
        >
          {title}
        </Heading>
        {
          subtitle
            ? (
              <Heading
                as="h2"
                fontSize="lg"
                fontWeight="600"
                color="gray.600"
              >
                {subtitle}
              </Heading>
            )
            : undefined
        }
        {
          excerpt
            ? (
              <Text color="black" marginTop="4">
                {excerpt}
              </Text>
            )
            : undefined
        }
      </a>
    </Link>
    <HStack
      gap="2"
      marginTop="2"
      justifyContent="flex-start"
      flexWrap="wrap"
      sx={{
        a: {
          marginLeft: '0 !important',
        },
      }}
    >
      {
        categories.map((category: string) => (
          <Link href={`/categories/${category}`} key={category}>
            <a>
              <Badge colorScheme="blue" key={category}>
                {category}
              </Badge>
            </a>
          </Link>
        ))
      }
      {
        tags.map((tag: string) => (
          <Link
            href={`/tags/${tag}`}
            as={`/tags/${tag}`}
            key={tag}
          >
            <a>
              <Badge colorScheme="yellow" key={tag}>
                {tag}
              </Badge>
            </a>
          </Link>
        ))
      }
    </HStack>
  </Box>
)
