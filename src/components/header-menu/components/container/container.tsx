import { HStack } from '@chakra-ui/react'

type ContainerProps = {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <HStack
    justifyContent={['space-between', 'space-between', 'flex-start', 'flex-start']}
    gap="10"
    paddingY="10"
    as="header"
  >
    { children }
  </HStack>
)
