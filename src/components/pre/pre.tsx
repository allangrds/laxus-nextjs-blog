import * as React from 'react'

import {
  Box, HStack, Icon, IconButton, Text, chakra,
} from '@chakra-ui/react'

export const Pre = (props) => {
  const textInput = React.useRef(null)
  const [hovered, setHovered] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  const onEnter = () => {
    setHovered(true)
  }

  const onExit = () => {
    setHovered(false)
    setCopied(false)
  }

  const onCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(textInput.current.textContent)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  const color = copied ? '#1abc9c' : 'white'

  return (
    <Box
      display="grid"
      ref={textInput}
      onMouseEnter={onEnter}
      position="relative"
      onMouseLeave={onExit}
      marginY="8"
      maxWidth={['none', 'none', 'none', '700px']}
      overflowX="scroll"
      backgroundColor="#374151"
      borderRadius="0.5em"
      paddingBottom="0"
    >
      {
        props.filename
          ? (
            <HStack paddingY="3" paddingX="4" alignItems="center">
              <Text color="white" fontWeight="600">
                {props.filename}
              </Text>
            </HStack>
          )
          : undefined
      }

      {
        hovered
          ? (
            <HStack
              position="absolute"
              right="2"
              top={props.filename ? '14' : '2'}
            >
              {
                copied
                  ? (
                    <Box
                      backgroundColor="gray.100"
                      paddingX="2"
                      paddingY="1"
                      borderRadius="4"
                    >
                      <Text fontSize="sm">Copied!</Text>
                    </Box>
                  )
                  : undefined
              }
              <IconButton
                onClick={onCopy}
                backgroundColor="#374151"
                border={`1px solid ${copied ? '#1abc9c' : '#6B7280'}`}
                aria-label="Copy code"
                _hover={{
                  backgroundColor: '#374151',
                  borderColor: color,
                }}
                _active={{
                  backgroundColor: '#374151',
                  borderColor: 'white',
                  boxShadow: '0px 0px 0 3px rgba(255, 255, 255 ,0.6)',
                }}
                icon={(
                  <Icon
                    viewBox="0 0 24 24"
                    stroke={color}
                    fill="none"
                  >
                    {copied
                      ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        />
                      )
                      : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      )}
                  </Icon>
              )}
              />
            </HStack>
          )
          : undefined
      }
      <chakra.pre
        className={props.className}
        maxWidth={['none', 'none', 'none', '700px']}
        overflowX="scroll"
        sx={{
          '> code': {
            ':before': {
              content: '""',
            },
            ':after': {
              content: '""',
            },
          },
        }}
        {...props}
      >
        {props.children}
      </chakra.pre>
    </Box>
  )
}
