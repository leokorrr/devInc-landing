import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import ITitle from './ITitle.interface'
import { StyledTitle } from './Title.style'

export const Title: React.FC<ITitle> = ({ title, size }) => {
  const isMobile = useMediaQuery('(max-width:768px)')

  const headers = [
    <h1>{title}</h1>,
    <h2>{title}</h2>,
    <h3>{title}</h3>,
    <h4>{title}</h4>,
    <h5>{title}</h5>,
    <h6>{title}</h6>,
  ]

  return (
    <StyledTitle isMobile={isMobile}>
      {headers[size - 1]}
    </StyledTitle>
  )
}
