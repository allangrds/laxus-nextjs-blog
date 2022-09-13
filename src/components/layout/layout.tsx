import { Box, HStack } from '@chakra-ui/react'

import { configuration } from '../../config'
import { HeaderMenu } from '../header-menu'

type LayoutProps = {
  categories?: string[]
  children: React.ReactNode
  series?: string[]
  tags?: string[]
}

const buildMenuWithChildren = (
  values?: string[],
  type: 'categories' | 'tags' | 'series'
) => {
  if (!values) {
    return {}
  }

  return {
    children: values.map((value: string) => {
      if (type === 'series') {
        const newValue = value.replace(/-/g, ' ')

        return {
          path: `/${type}/${value}`,
          title: newValue,
        }
      }

      return {
        path: `/${type}/${value}`,
        title: value,
      }
    }),
    path: `/${type}`,
    title: configuration.ui.header.navigation[type],
  }
}

export const Layout = ({
  categories, children, series, tags,
}: LayoutProps) => {
  const linksCategories = buildMenuWithChildren(categories, 'categories')
  const linksSeries = buildMenuWithChildren(series, 'series')
  const linksTags = buildMenuWithChildren(tags, 'tags')

  return (
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
              { ...linksCategories },
              { ...linksSeries },
              { ...linksTags },
              {
                path: '/about',
                title: configuration.ui.header.navigation.about,
              },
            ]}
          />
        </Box>
      </HStack>
      <HStack justifyContent="center" as="main">
        { children }
      </HStack>
    </>
  )
}
