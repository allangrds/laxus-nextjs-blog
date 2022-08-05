import { extendTheme } from '@chakra-ui/react'

import { colors } from './colors'

const theme = extendTheme({
  colors,
  fonts: {
    body: '\'Inter\', sans-serif',
    heading: '\'Inter\', sans-serif',
  },

  styles: {
    global: {},
  },
})

export { theme }
