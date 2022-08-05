import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PostTitle, PostTitleProps } from './post-title'

export default {
  component: PostTitle,
  title: 'Components/PostTitle',
} as ComponentMeta<typeof PostTitle>

const Template: ComponentStory<typeof PostTitle> = (args: PostTitleProps) => (
  <PostTitle {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  subtitle: 'Criando pastas e arquivos com conteúdos iguais',
  title: 'Automatizando a criação de arquivos com Plop.js',
}
