import {
  Box,
  List,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'

import type { Navigation } from '../../types/navigation'

type MenuDesktopProps = {
  isOpen: boolean
  navigation: Navigation
}

export const MenuMobile = ({ isOpen, navigation }: MenuDesktopProps) => (
  <Box
    backgroundColor="white"
    display={isOpen ? 'block' : 'none'}
    as="nav"
    position="fixed"
    width="100%"
    height="100%"
    left="0"
    top="0"
    opacity="98%"
    paddingLeft="4"
    paddingTop="10"
  >
    <VStack
      gap="4"
      as={List}
      listStyleType="none"
      alignItems="flex-start"
    >
      {
        navigation.map((item) => (
          <VStack
            as={ListItem}
            gap="1"
            key={item.title}
            alignItems="flex-start"
          >
            <Link href={item.path}>
              <Text as="a" fontWeight="600" fontSize="2xl" cursor="pointer">
                {item.title}
              </Text>
            </Link>
            {
              item.children
                ? (
                  <VStack
                    as={List}
                    gap="1"
                    alignItems="flex-start"
                    paddingLeft="4"
                  >
                    {
                      item.children.map((child) => (
                        <ListItem>
                          <Link href={child.path} key={child.title}>
                            <Text
                              as="a"
                              fontWeight="600"
                              fontSize="xl"
                            >
                              {child.title}
                            </Text>
                          </Link>
                        </ListItem>
                      ))
                    }
                  </VStack>
                )
                : undefined
            }
          </VStack>
        ))
      }
    </VStack>
  </Box>
)
