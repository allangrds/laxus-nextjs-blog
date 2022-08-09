import { Box, HStack } from '@chakra-ui/react'

import { configuration } from '../../config'
import { HeaderMenu } from '../header-menu'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <HStack justifyContent="center" backgroundColor="blue.50">
      <Box
        maxWidth="container.lg"
        width="100%"
        paddingX={6}
      >
        <HeaderMenu
          title={configuration.ui.header.title.text}
          navigation={[
            {
              path: '/',
              title: configuration.ui.header.navigation.home,
            },
            {
              path: '/about',
              title: configuration.ui.header.navigation.about,
            },
          ]}
        />
      </Box>
    </HStack>
    <HStack justifyContent="center" paddingY="8" as="main">
      <Box
        maxWidth="container.lg"
        width="100%"
        paddingX="6"
      >
        { children }
      </Box>
    </HStack>
  </>
)
