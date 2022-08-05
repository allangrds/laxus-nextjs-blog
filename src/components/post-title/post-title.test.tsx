import { render, screen } from '@testing-library/react'

import { PostTitle } from './post-title'

const defaultProps = {
  subtitle: 'Criando pastas e arquivos com conteúdos iguais',
  title: 'Automatizando a criação de arquivos com Plop.js',
}

const selectors = {
  subtitle: () => screen.getByText(defaultProps.subtitle),
  title: () => screen.getByText(defaultProps.title),
}

const renderComponent = (props = defaultProps) => (
  render(<PostTitle {...props} />))

test('should render the component', async () => {
  renderComponent()

  expect(selectors.subtitle()).toBeInTheDocument()
  expect(selectors.title()).toBeInTheDocument()
})
