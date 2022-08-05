import { extendTheme } from '@chakra-ui/react'

import { colors } from './colors'

const theme = extendTheme({
  colors,

  styles: {
    global: {},
  },
})

export { theme }
