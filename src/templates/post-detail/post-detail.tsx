import * as React from 'react'

import {
  Box,
  Grid,
  HStack,
  Heading,
  OrderedList,
  Text,
  UnorderedList,
  chakra,
} from '@chakra-ui/react'
import { getMDXComponent } from 'mdx-bundler/client'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share'
import { useRouter } from 'next/router'

import {
  Alert,
  Badge,
  PostTitle,
  Pre,
  Quote,
  Toc,
} from '../../components'

const components = {
  Alert,
  Badge,
  code: (props) => (
    <chakra.code
      color="red.500"
      fontWeight="700"
      {...props}
      sx={{
        ':before': {
          content: '"`"',
        },
        ':after': {
          content: '"`"',
        },
      }}
    >
      {props.children}
    </chakra.code>
  ),
  h1: (props) => (
    <Heading
      as="h1"
      fontSize="3xl"
      marginTop="3"
      marginBottom="3"
      {...props}
    />
  ),
  h2: (props) => (
    <Heading
      as="h2"
      fontSize="2xl"
      marginTop="3"
      marginBottom="3"
      {...props}
    />
  ),
  h3: (props) => (
    <Heading
      as="h3"
      fontSize="xl"
      marginTop="3"
      marginBottom="3"
      {...props}
    />
  ),
  h4: (props) => (
    <Heading
      as="h4"
      fontSize="md"
      {...props}
    />
  ),
  h5: (props) => (
    <Heading
      as="h5"
      {...props}
    />
  ),
  h6: (props) => (
    <Heading
      as="h6"
      {...props}
    />
  ),
  Quote,
  p: (props) => (
    <Text
      marginY="3"
      fontSize="lg"
      lineHeight="8"
      {...props}
    />
  ),
  pre: Pre,
  ol: (props) => (
    <OrderedList
      paddingLeft="1"
      fontSize="lg"
      marginY="3"
      {...props}
    />
  ),
  ul: (props) => (
    <UnorderedList
      paddingLeft="1"
      fontSize="lg"
      marginY="3"
      {...props}
    />
  ),
}

export const PostDetail = ({ host, post }) => {
  const router = useRouter()
  const { content, frontmatter, toc } = post
  const Component = React.useMemo(() => getMDXComponent(content), [content])

  return (
    <Box width="100%">
      <HStack backgroundColor="blue.50" width="100%" justifyContent="center">
        <Box
          maxWidth="container.lg"
          width="100%"
          paddingX="6"
          paddingY="8"
        >
          <PostTitle
            title={frontmatter.title}
            subtitle={frontmatter?.subtitle}
          />
        </Box>
      </HStack>
      <HStack width="100%" justifyContent="center">
        <Box
          maxWidth="container.lg"
          width="100%"
          paddingX="6"
          paddingTop="8"
        >
          <Grid
            templateColumns={['1fr', '1fr', '1fr', '1fr 250px']}
            gap="8"
          >
            <Box>
              <Component components={components} />
            </Box>
            <Toc toc={toc} />
          </Grid>
        </Box>
      </HStack>
      <HStack width="100%" justifyContent="center">
        <HStack
          maxWidth="container.lg"
          width="100%"
          paddingX="6"
          paddingY="8"
        >
          <FacebookShareButton
            url={`${host}/${router.asPath}`}
            quote="next-share is a social share buttons for your next React apps."
            hashtag="#nextshare"
          >
            <FacebookIcon size={42} round />
          </FacebookShareButton>
          <TwitterShareButton
            url="https://github.com/next-share"
            title="next-share is a social share buttons for your next React apps."
          >
            <TwitterIcon size={42} round />
          </TwitterShareButton>
          <LinkedinShareButton url="https://github.com/next-share">
            <LinkedinIcon size={42} round />
          </LinkedinShareButton>
          <TelegramShareButton
            url="https://github.com/next-share"
            title="next-share is a social share buttons for your next React apps."
          >
            <TelegramIcon size={42} round />
          </TelegramShareButton>
          <WhatsappShareButton
            url="https://github.com/next-share"
            title="next-share is a social share buttons for your next React apps."
            separator=":: "
          >
            <WhatsappIcon size={42} round />
          </WhatsappShareButton>
        </HStack>
      </HStack>
    </Box>
  )
}
