import { Box, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import IFAQItem from './FAQItem.interface'
import arrowIcon from '../../../assets/arrowicon.svg'

export const FAQItem: React.FC<IFAQItem> = (props) => {
  const { question, answer } = props

  const [isOpen, setIsOpen] = useState(false)

  const isMobile = useMediaQuery('(max-width:768px)')

  const handleFAQState = () => setIsOpen(!isOpen)

  return (
    <Box sx={{ maxWidth: '960px', mb: '32px' }}>
      <Box
        sx={{
          fontSize: isMobile ? '24px' : '28px',
          fontWeight: 'bold',
          '&:hover': {
            cursor: 'pointer',
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          mb: '20px',
        }}
        onClick={handleFAQState}
      >
        {question}
        <Box
          component="img"
          sx={{
            transition: '.3s',
            transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
          alt="arrow icon"
          src={arrowIcon}
        />
      </Box>
      <Box sx={{ display: isOpen ? 'block' : 'none', fontSize: '20px' }} component="p">
        {answer}
      </Box>
    </Box>
  )
}
