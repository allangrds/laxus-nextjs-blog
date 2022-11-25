import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Quote, QuoteProps } from './quote'

export default {
  component: Quote,
  title: 'Components/Quote',
} as ComponentMeta<typeof Quote>

const Template: ComponentStory<typeof Quote> = (args: QuoteProps) => (
  <Quote {...args} />
)

export const Default = Template.bind({})
Default.args = {
  author: 'Fernando de Noronha',
  text: 'Não confunda briga com luta: briga tem hora para acabar, luta é para a vida inteira.',
}
