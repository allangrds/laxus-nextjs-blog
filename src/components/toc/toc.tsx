import * as React from 'react'

import { Box, Heading, Link } from '@chakra-ui/react'

import { useIntersectionObserver } from './hooks'

const getHrefValue = (value: string) => (
  value.substring(1, value.length)
)

const depthMargin = {
  1: 0,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
}

export const Toc = ({ toc }) => {
  const [activeId, setActiveId] = React.useState()
  useIntersectionObserver(setActiveId)

  return (
    <Box position="relative" display={['none', 'none', 'none', 'block']}>
      <Box position="sticky" top="0" paddingTop="4">
        <Heading
          as="h1"
          fontSize="md"
          fontWeight="700"
          letterSpacing="0.1rem"
          marginBottom="4"
        >
          CONTENT
        </Heading>
        <Box overflow="auto" maxHeight="500px">
          {
            toc.map((link) => (
              <Link
                display="block"
                href={link.url}
                color={activeId === getHrefValue(link.url) ? 'blue.200' : ''}
                marginBottom="2"
                marginLeft={depthMargin[link.depth]}
                key={link.value}
                _hover={{
                  fontWeight: '500',
                  textDecoration: 'none',
                }}
              >
                {link.value}
              </Link>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}
