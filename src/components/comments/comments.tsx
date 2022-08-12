import { Box, Heading } from '@chakra-ui/react'
import ReactDisqusComments from 'react-disqus-comments'

import { configuration } from '../../config'

export const Comments = ({ slug, title }) => {
  const host = process.env.HOST || ''
  const url = `${host}posts/${slug}`
  const shortname = process.env.DISCUS_SHORTNAME || ''

  return (
    <Box>
      <Heading as="h1">
        { configuration.ui.comments }
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
