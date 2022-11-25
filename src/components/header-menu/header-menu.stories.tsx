import * as React from 'react'

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { HeaderMenu, HeaderMenuProps } from './header-menu'

export default {
  component: HeaderMenu,
  title: 'Components/HeaderMenu',
} as ComponentMeta<typeof HeaderMenu>

const Template: ComponentStory<typeof HeaderMenu> = (args: HeaderMenuProps) => (
  <HeaderMenu {...args} />
)

export const Default = Template.bind({})
Default.args = {
  navigation: [
    {
      path: '/',
      title: 'Home',
    },
    {
      children: [
        {
          path: '/react',
          title: 'React',
        },
        {
          path: '/javascript',
          title: 'Javascript',
        },
        {
          path: '/typescript',
          title: 'Typescript',
        },
      ],
      path: '/categories',
      title: 'Categories',
    },
    {
      children: [
        {
          path: '/react',
          title: 'React',
        },
        {
          path: '/javascript',
          title: 'Javascript',
        },
        {
          path: '/typescript',
          title: 'Typescript',
        },
      ],
      path: '/tags',
      title: 'Tags',
    },
    {
      path: '/about',
      title: 'About',
    },
  ],
  title: 'Allan Ramos',
}
