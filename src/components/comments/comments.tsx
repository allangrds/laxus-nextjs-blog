import { Box, Heading } from '@chakra-ui/react'
import ReactDisqusComments from 'react-disqus-comments'

export const Comments = ({ slug, title }) => {
  const host = process.env.HOST || ''
  const url = `${host}${slug}`
  const shortname = process.env.DISCUS_SHORTNAME || ''

  return (
    <Box>
      <Heading as="h1">
        Comments
      </Heading>
      <ReactDisqusComments
        shortname={shortname}
        identifier={url}
        title={title}
        url={url}
      />
    </Box>
  )
}
