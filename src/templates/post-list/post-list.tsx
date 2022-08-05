import {
  Box, HStack, Heading, VStack,
} from '@chakra-ui/react'
import Link from 'next/link'

import { HeaderMenu, PostItem } from '../../components'
import { configuration } from '../../config'

export const PostList = () => (
  <>
    <HStack justifyContent="center" backgroundColor="blue.50">
      <Box
        maxWidth="container.md"
        width="100%"
        paddingX={6}
      >
        <HeaderMenu
          title={configuration.ui.header.title.text}
          navigation={[
            {
              path: '/',
              title: configuration.ui.header.navigation.home,
            },
            {
              path: '/about',
              title: configuration.ui.header.navigation.about,
            },
          ]}
        />
      </Box>
    </HStack>
    <HStack justifyContent="center" paddingY="8" as="main">
      <VStack
        maxWidth="container.md"
        width="100%"
        paddingX="6"
        gap="10"
      >
        <Heading
          width="100%"
          as="h1"
          fontSize="2xl"
        >
          Post
        </Heading>
        <Link href="/x">
          <a>
            <PostItem
              description="Não é que eu me esforce muito para tal, mas criar sempre aquela mesma estruturinha e conteúdo base de arquivos é aquele tipo de tarefa que poderia não existir."
              subtitle="Criando pastas e arquivos com conteúdos iguais"
              tags={['javascript', 'node']}
              title="Automatizando a criação de arquivos com Plop.js"
            />
          </a>
        </Link>
        <Link href="/x">
          <a>
            <PostItem
              description="Não é que eu me esforce muito para tal, mas criar sempre aquela mesma estruturinha e conteúdo base de arquivos é aquele tipo de tarefa que poderia não existir."
              subtitle="Criando pastas e arquivos com conteúdos iguais"
              tags={['javascript', 'node']}
              title="Automatizando a criação de arquivos com Plop.js"
            />
          </a>
        </Link>
      </VStack>
    </HStack>
  </>
)
