import { Heading, VStack } from '@chakra-ui/react'
import Link from 'next/link'

import { PostItem } from '../../components'

export const PostList = () => (
  <VStack
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
)
