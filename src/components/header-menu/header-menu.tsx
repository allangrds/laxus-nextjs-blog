/* eslint-disable global-require */
import {
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'

export type HeaderMenuProps = {
  title: string
  navigation: {
    title: string
    path: string
    children?: {
      title: string
      path: string
    }[]
  }[]
}

export const HeaderMenu = ({ navigation, title }: HeaderMenuProps) => (
  <HStack gap="10" paddingY="10" as="header">
    <Heading as="h1" fontWeight="700">{title}</Heading>
    <nav>
      <HStack gap="4" as={List} listStyleType="none">
        {
          navigation.map((item) => (
            <HStack as={ListItem} gap="1" marginLeft="0 !important" key={item.title}>
              <Link href={item.path}>
                <Text as="a" fontWeight="600">
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
                            backgroundColor: 'white',
                          }}
                          _active={{
                            backgroundColor: 'white',
                          }}
                          minWidth="none"
                          backgroundColor="white"
                          marginLeft="0 !important"
                          padding="0"
                          sx={{
                            span: {
                              marginRight: 0,
                            },
                          }}
                          leftIcon={(
                            <Image
                              maxWidth="17px"
                              src={require('../../assets/images/down-arrow.svg')}
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
                                      as="a"
                                      _hover={{
                                        color: 'blue.100',
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
    </nav>
  </HStack>
)
