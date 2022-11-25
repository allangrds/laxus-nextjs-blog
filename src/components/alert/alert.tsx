import { HStack, Icon, VStack } from '@chakra-ui/react'

import ErrorIcon from '../../assets/images/error.svg'
import InfoIcon from '../../assets/images/info.svg'
import SuccessIcon from '../../assets/images/success.svg'
import WarningIcon from '../../assets/images/warning.svg'

export type AlertProps = {
  children: React.ReactNode
  type: 'success' | 'info' | 'warning' | 'error'
}

const types = {
  colors: {
    error: 'red.50',
    info: 'blue.100',
    success: 'green.50',
    warning: 'yellow.50',
  },
  icons: {
    error: {
      element: ErrorIcon,
      width: '26.67px',
      height: '26.67px',
    },
    info: {
      element: InfoIcon,
      width: '26.67px',
      height: '26.67px',
    },
    success: {
      element: SuccessIcon,
      width: '23.25px',
      height: '19.5px',
    },
    warning: {
      element: WarningIcon,
      width: '26.67px',
      height: '24px',
    },
  },
}

export const Alert = ({ children, type }: AlertProps) => (
  <HStack
    borderRadius="8"
    backgroundColor={types.colors[type]}
    gap="2"
    justifyContent="flex-start"
    alignItems="flex-start"
    padding="4"
    marginY="4"
  >
    <Icon
      as={types.icons[type].element}
      width={types.icons[type].width}
      height={types.icons[type].height}
      marginTop="1"
    />
    <VStack
      alignItems="flex-start"
      sx={{
        '> p:first-child': {
          marginTop: 0,
        },
        '> p:last-child': {
          marginBottom: 0,
        },
      }}
    >
      { children }
    </VStack>
  </HStack>
)
