import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'

import BlockItem from './Item'

afterEach(cleanup)

describe('<BlockItem />', () => {
  test('renders the element without error', () => {
    const { getByText } = render(
      <BlockItem to="http://example.net">test</BlockItem>
    )
    expect(getByText('test')).toBeInTheDocument()
    expect(document.querySelector('a')!.getAttribute('href')).toBe(
      'http://example.net'
    )
  })
})
