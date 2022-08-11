/* eslint-disable global-require */
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Icon,
  List,
  ListItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'

import DownArrowIcon from '../../../../assets/images/down-arrow.svg'
import type { Navigation } from '../../types/navigation'

type MenuDesktopProps = {
  navigation: Navigation
}

export const MenuDesktop = ({ navigation }: MenuDesktopProps) => (
  <Box as="nav" display={['none', 'none', 'block', 'block']}>
    <HStack gap="4" as={List} listStyleType="none">
      {
        navigation.map((item) => (
          <HStack as={ListItem} gap="1" marginLeft="0 !important" key={item.title}>
            <Link href={item.path}>
              <Text as="a" fontWeight="600" cursor="pointer">
                {item.title}
              </Text>
            </Link>
            {
              item.children
                ? (
                  <Popover>
                    <PopoverTrigger>
                      <Button
                        _hover={{
                          backgroundColor: 'blue.50',
                        }}
                        _active={{
                          backgroundColor: 'blue.50',
                        }}
                        minWidth="none"
                        backgroundColor="blue.50"
                        marginLeft="0 !important"
                        padding="0"
                        sx={{
                          span: {
                            marginRight: 0,
                          },
                        }}
                        leftIcon={(
                          <Icon
                            width="19px"
                            as={DownArrowIcon}
                          />
                        )}
                      />
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverBody>
                        <Grid
                          templateColumns="1fr 1fr"
                          gap="8px 32px"
                          padding="4"
                        >
                          {
                            item.children.map((child) => (
                              <GridItem key={child.title}>
                                <Link href={child.path}>
                                  <Text
                                    cursor="pointer"
                                    as="a"
                                    _hover={{
                                      color: 'blue.200',
                                    }}
                                  >
                                    {child.title}
                                  </Text>
                                </Link>
                              </GridItem>
                            ))
                          }
                        </Grid>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                )
                : undefined
            }
          </HStack>
        ))
      }
    </HStack>
  </Box>
)
