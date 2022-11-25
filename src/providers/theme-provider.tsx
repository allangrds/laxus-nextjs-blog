import * as React from 'react'

import { ChakraProvider as Provider, extendTheme } from '@chakra-ui/react'

import { theme as defaultTheme } from '../theme'
import { Fonts } from '../theme/fonts'

export const theme = extendTheme(defaultTheme)

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => (
  <Provider theme={theme} resetCSS>
    <Fonts />
    {children}
  </Provider>
)
