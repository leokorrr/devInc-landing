import React from 'react'
import { render } from '@testing-library/react'
import { ContentPage } from '..'

describe('Page', () => {
  it('should render Content Page', () => {
    render(<ContentPage />)
  })
})
