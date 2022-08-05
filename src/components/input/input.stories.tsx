import * as React from 'react'

import { SearchIcon } from '@chakra-ui/icons'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Input } from './input'
import type { InputProps } from './input'

export default {
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  component: Input,
  title: 'Components/Input',
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <Input {...args} />
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Type your name',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  icon: <SearchIcon />,
  placeholder: 'Type your name',
}
