import { render, screen } from '@testing-library/react'

import { PostItem } from './post-item'

const defaultProps = {
  description: 'Não é que eu me esforce muito para tal, mas criar sempre aquela mesma estruturinha e conteúdo base de arquivos é aquele tipo de tarefa que poderia não existir.',
  subtitle: 'Criando pastas e arquivos com conteúdos iguais',
  tags: ['javascript', 'node'],
  title: 'Automatizando a criação de arquivos com Plop.js',
}

const selectors = {
  description: () => screen.getByText(defaultProps.description),
  firstTag: () => screen.getByText(defaultProps.tags[0]),
  secondTag: () => screen.getByText(defaultProps.tags[1]),
  subtitle: () => screen.getByText(defaultProps.subtitle),
  title: () => screen.getByText(defaultProps.title),
}

const renderComponent = (props = defaultProps) => (
  render(<PostItem {...props} />))

test('should render the component', async () => {
  renderComponent()

  expect(selectors.description()).toBeInTheDocument()
  expect(selectors.firstTag()).toBeInTheDocument()
  expect(selectors.secondTag()).toBeInTheDocument()
  expect(selectors.subtitle()).toBeInTheDocument()
  expect(selectors.title()).toBeInTheDocument()
})
