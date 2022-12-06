import React from 'react'
import { render, screen } from '@testing-library/react'
import { MainLayout } from '..'

describe('UIComponent', () => {
  it('should render UI Component', () => {
    render(
      <MainLayout>
        <h1>Test</h1>
      </MainLayout>,
    )
  })
  it('should render same text as in props', () => {
    render(
      <MainLayout>
        <h1>Test</h1>
      </MainLayout>,
    )
    const nav = document.querySelector('nav')
    const footer = document.querySelector('footer')
    const text = screen.getByText('Test')
    expect(nav).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })
})
