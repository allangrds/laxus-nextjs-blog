import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Badge, BadgeProps } from '.'

export default {
  component: Badge,
  title: 'Components/Badge',
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args: BadgeProps) => (
  <Badge {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'Node',
}

export const Yellow = Template.bind({})
Yellow.args = {
  children: 'Node',
  colorScheme: 'yellow',
}
