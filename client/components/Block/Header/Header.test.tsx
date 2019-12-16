import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'

import BlockHeader from './Header'

afterEach(cleanup)

describe('<BlockHeader />', () => {
  test('renders the element without error', () => {
    const { getByText } = render(
      <BlockHeader
        src="http://example.net/1.png"
        name="@hello"
        to="http://example.net"
      >
        test
      </BlockHeader>
    )
    expect(getByText('@hello')).toBeInTheDocument()
    expect(document.querySelector('a')!.getAttribute('href')).toBe(
      'http://example.net'
    )
    expect(document.querySelector('img')!.getAttribute('src')).toBe(
      'http://example.net/1.png'
    )
  })
})
