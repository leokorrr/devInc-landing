import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { Title } from '../../ui/components/Title'
import { ContactForm } from './ContactForm'
import { ContactInfo } from './ContactInfo'

export const ContactUs = () => {
  const isLaptop = useMediaQuery('(max-width:1480px)')
  const isLaptopSmall = useMediaQuery('(max-width:1330px)')
  const isTablet = useMediaQuery('(max-width:1200px)')
  const isMobile = useMediaQuery('(max-width:768px)')

  return (
    <Box
      id="contact"
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse',
        pl: '20px',
        pr: isTablet ? '20px' : 0,
      }}
    >
      <Box sx={{
        display: isTablet ? 'flex' : 'grid',
        flexDirection: 'column',
        gridTemplateRows: '1fr',
        gridTemplateColumns: '1.45fr 1fr',
        maxWidth: '1670px',
        width: '100%',
      }}
      >
        <Box>
          <Title title="Contact us" size={2} />
          <ContactForm
            isMobile={isMobile}
            isTablet={isTablet}
            isLaptop={isLaptop}
          />
        </Box>
        <Box sx={{ backgroundColor: isTablet ? 'transparent' : '#000000' }}>
          <ContactInfo
            isMobile={isMobile}
            isTablet={isTablet}
            isLaptopSmall={isLaptopSmall}
            isLaptop={isLaptop}
          />
        </Box>
      </Box>

    </Box>
  )
}
