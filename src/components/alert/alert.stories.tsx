import { Text } from '@chakra-ui/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Alert, AlertProps } from './alert'

export default {
  component: Alert,
  title: 'Components/Alert',
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args: AlertProps) => (
  <Alert {...args} />
)

export const Success = Template.bind({})
Success.args = {
  children: <Text>Sucesso total!</Text>,
  type: 'success',
}

export const Info = Template.bind({})
Info.args = {
  children: <Text>Informação total!</Text>,
  type: 'info',
}

export const Warning = Template.bind({})
Warning.args = {
  children: <Text>Alerta total!</Text>,
  type: 'warning',
}

export const Error = Template.bind({})
Error.args = {
  children: <Text>Erro total!</Text>,
  type: 'error',
}
