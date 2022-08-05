import {
  Box, HStack, Heading, Text,
} from '@chakra-ui/react'

import { Badge } from '../badge'

export type PostItemProps = {
  description?: string;
  subtitle?: string;
  tags: string[];
  title: string;
}

export const PostItem = ({
  description, subtitle, tags, title,
}: PostItemProps) => (
  <Box as="article">
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
      description
        ? (
          <Text color="black" marginTop="4">
            {description}
          </Text>
        )
        : undefined
    }
    <HStack gap="1" marginTop="2">
      {
        tags.map((tag: string) => (
          <Badge colorScheme="yellow">{tag}</Badge>
        ))
      }
    </HStack>
  </Box>
)
