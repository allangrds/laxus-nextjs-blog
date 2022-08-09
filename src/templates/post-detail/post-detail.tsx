import { Grid, Heading, Text } from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'

import { Badge, PostTitle } from '../../components'

const components = {
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  h4: (props) => <Heading as="h4" {...props} />,
  h5: (props) => <Heading as="h5" {...props} />,
  h6: (props) => <Heading as="h6" {...props} />,
  p: (props) => <Text {...props} />,
  Badge,
}

export const PostDetail = ({ post }) => (
  <Grid templateColumns="1fr 250px" gap="8">
    <div>
      <PostTitle
        title={post.frontmatter.title}
        subtitle={post.frontmatter?.subtitle}
      />
      <MDXRemote {...post.content} components={components} />
    </div>
    <div style={{ position: 'relative', paddingTop: '40px' }}>
      <div style={{ position: 'sticky', top: 0 }}>
        <p>adas</p>
      </div>
    </div>
  </Grid>
)
