import {
  HStack, Icon, Text, VStack,
} from '@chakra-ui/react'

import QuoteIcon from '../../assets/images/quote.svg'

export type QuoteProps = {
  author: string
  text: string
}

export const Quote = ({ author, text }: QuoteProps) => (
  <HStack
    gap="2"
    justifyContent="flex-start"
    alignItems="flex-start"
    marginY="10"
  >
    <div>
      <Icon width="55px" height="55px" as={QuoteIcon} />
    </div>
    <VStack gap="2">
      <Text fontWeight="400" fontSize="xl" width="100%">
        { text }
      </Text>
      <Text fontWeight="700" fontSize="lg" width="100%">
        { author }
      </Text>
    </VStack>
  </HStack>
)
