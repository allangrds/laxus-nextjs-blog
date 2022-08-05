import { Badge as BadgeBase, BadgeProps } from '@chakra-ui/react'

export type { BadgeProps } from '@chakra-ui/react'

export const Badge = (props: BadgeProps) => {
  const { children } = props

  return (
    <BadgeBase
      {...props}
      paddingX="3"
      paddingY="1"
      borderRadius="4"
      color="black"
    >
      {children}
    </BadgeBase>
  )
}
