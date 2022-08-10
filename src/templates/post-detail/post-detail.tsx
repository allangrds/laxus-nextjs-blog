import * as React from 'react'

import { Grid, Heading, Text } from '@chakra-ui/react'
import { getMDXComponent } from 'mdx-bundler/client'

import { Badge, PostTitle, Pre } from '../../components'

const components = {
  Badge,
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  h4: (props) => <Heading as="h4" {...props} />,
  h5: (props) => <Heading as="h5" {...props} />,
  h6: (props) => <Heading as="h6" {...props} />,
  p: (props) => <Text {...props} />,
  pre: Pre,
}

export const PostDetail = ({ post }) => {
  const { content, frontmatter } = post
  const Component = React.useMemo(() => getMDXComponent(content), [content])

  return (
    <Grid templateColumns="1fr 250px" gap="8">
      <div>
        <PostTitle
          title={frontmatter.title}
          subtitle={frontmatter?.subtitle}
        />
        <Component components={components} />
      </div>
    </Grid>
  )

  // return (
  //   <Grid templateColumns="1fr 250px" gap="8">
  //     <div>
  //       <PostTitle
  //         title={post.frontmatter.title}
  //         subtitle={post.frontmatter?.subtitle}
  //       />
  //       {/* <MDXRemote {...post.content} components={components} /> */}
  //       <Component />
  //     </div>
  //     <div style={{ position: 'relative', paddingTop: '40px' }}>
  //       <div style={{ position: 'sticky', top: 0 }}>
  //         <p>adas</p>
  //       </div>
  //     </div>
  //   </Grid>
  // )
}
