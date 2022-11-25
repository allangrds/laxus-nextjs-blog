import { Box, Heading, Text } from '@chakra-ui/react'

export type PostTitleProps = {
  date: string;
  subtitle?: string;
  title: string;
}

export const PostTitle = ({ date, subtitle, title }: PostTitleProps) => (
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
    <Text marginTop={8} fontSize="lg">{date}</Text>
  </Box>
)
