import React from 'react'
import { render, screen } from '@testing-library/react'
import { Title } from '..'

const mockParam = 'Test'
const mockSize = 1

describe('UIComponent', () => {
  it('should render UI Component', () => {
    render(<Title size={mockSize} title={mockParam} />)
  })
  it('should render same text as in props', () => {
    render(<Title size={mockSize} title={mockParam} />)
    const param = screen.getByText('Test')
    const header = document.querySelector('h1')
    expect(param).toBeInTheDocument()
    expect(header).toBeInTheDocument()
  })
})
