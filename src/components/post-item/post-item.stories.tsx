import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PostItem, PostItemProps } from './post-item'

export default {
  component: PostItem,
  title: 'Components/PostItem',
} as ComponentMeta<typeof PostItem>

const Template: ComponentStory<typeof PostItem> = (args: PostItemProps) => (
  <PostItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  description: 'Não é que eu me esforce muito para tal, mas criar sempre aquela mesma estruturinha e conteúdo base de arquivos é aquele tipo de tarefa que poderia não existir.',
  subtitle: 'Criando pastas e arquivos com conteúdos iguais',
  tags: ['javascript', 'node'],
  title: 'Automatizando a criação de arquivos com Plop.js',
}
