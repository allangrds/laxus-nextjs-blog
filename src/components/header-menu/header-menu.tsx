import * as React from 'react'

import {
  Heading,
} from '@chakra-ui/react'

import {
  Container, MenuDesktop, MenuMobile, MenuToggle,
} from './components'
import type { Navigation } from './types/navigation'

export type HeaderMenuProps = {
  title: string
  navigation: Navigation
}

export const HeaderMenu = ({ navigation, title }: HeaderMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Container>
      <Heading as="h1" fontWeight="700">{title}</Heading>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuDesktop navigation={navigation} />
      <MenuMobile navigation={navigation} isOpen={isOpen} />
    </Container>
  )
}
