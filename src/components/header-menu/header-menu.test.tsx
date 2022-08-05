import * as React from 'react'
import { render, screen } from '@testing-library/react'

import { HeaderMenu } from './header-menu'

const selectors = {
  title: () => screen.getByText(/hello-world/),
}

const renderComponent = (props?: any) =>
  render(
    <HeaderMenu {...props} />
  )

test('loads and displays greeting', async () => {
  const { debug } = renderComponent()

  expect(selectors.title()).toBeInTheDocument()
})
