import { Box, Heading } from '@chakra-ui/react'

export type PostTitleProps = {
  subtitle?: string;
  title: string;
}

export const PostTitle = ({ subtitle, title }: PostTitleProps) => (
  <Box paddingY="10">
    <Heading
      as="h1"
      fontSize="2xl"
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
            fontSize="xl"
            fontWeight="600"
            color="gray.600"
          >
            {subtitle}
          </Heading>
        )
        : undefined
    }
  </Box>
)
