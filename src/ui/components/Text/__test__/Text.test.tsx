import React from 'react'
import { render, screen } from '@testing-library/react'
import { Text } from '..'

const mockParam = 'Test'

describe('UIComponent', () => {
  it('should render UI Component', () => {
    render(<Text text={mockParam} />)
  })
  it('should render same text as in props', () => {
    render(<Text text={mockParam} />)
    const param = screen.getByText('Test')
    expect(param).toBeInTheDocument()
  })
})
