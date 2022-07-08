import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { Title } from '../../ui/components/Title'
import aboutUsImage from '../../assets/about-us.jpg'

export const AboutUs: React.FC = () => {
  const isLaptop = useMediaQuery('(max-width:1200px)')
  const isTablet = useMediaQuery('(max-width:768px)')

  return (
    <Box
      id="about-us"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: '60px',
      }}
    >
      <Box sx={{
        maxWidth: '1480px',
        width: '100%',
        px: '20px',
      }}
      >
        <Title title="About us" size={2} />
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
        >
          <Box sx={{
            maxWidth: '1200px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: isLaptop ? '20px' : '190px',
          }}
          >
            {!isTablet && (
              <Box sx={{ width: isLaptop ? '50%' : '100%' }}>
                <Box component="img" sx={{ width: '100%' }} src={aboutUsImage} alt="about-us" />
              </Box>
            )}
            <Box sx={{ fontSize: isLaptop ? '18px' : '20px', maxWidth: isTablet ? 'none' : '372px' }}>
              <Box component="p" sx={{ mt: isTablet ? 0 : '18px' }}>
                We are a polish community of programmers working together
                to optimize your business, so you&apos;ll have more time for really important things
              </Box>
              <Box component="p">
                We are experts in web applications. Out stack is HTML5, CSS3, JavaScript
                (React, Node) and PHP (Symfony, Laravel, Magento 2).
              </Box>
              <Box sx={{ fontWeight: 'bold' }}>
                Start your story with us!
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
