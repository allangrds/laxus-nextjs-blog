import { Box, Heading } from '@chakra-ui/react'

export type PostTitleProps = {
  subtitle?: string;
  title: string;
}

export const PostTitle = ({ subtitle, title }: PostTitleProps) => (
  <Box>
    <Heading
      as="h1"
      fontSize="4xl"
      fontWeight="700"
      color="black"
      marginBottom="1"
    >
      {title}
    </Heading>
    {
      subtitle
        ? (
          <Heading
            as="h2"
            fontSize="2xl"
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
