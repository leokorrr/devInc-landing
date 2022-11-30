import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { Title } from '../../ui/components/Title'
import aboutUsImage from '../../assets/about-us.jpg'

export const AboutUs: React.FC = () => {
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
      <Box
        sx={{
          maxWidth: '1480px',
          width: '100%',
          px: '20px',
        }}
      >
        <Title title="About us" size={2} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              maxWidth: '1200px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              gap: {
                laptop: '190px',
                xs: '20px',
              },
            }}
          >
            {!isTablet && (
              <Box
                sx={{
                  width: {
                    laptop: '100%',
                    xs: '50%',
                  },
                }}
              >
                <Box component="img" sx={{ width: '100%' }} src={aboutUsImage} alt="about-us" />
              </Box>
            )}
            <Box
              sx={{
                fontSize: {
                  laptop: '20px',
                  xs: '18px',
                },
                maxWidth: {
                  tablet: '372px',
                  xs: 'none',
                },
              }}
            >
              <Box
                component="p"
                sx={{
                  mt: {
                    tablet: '18px',
                    xs: 0,
                  },
                }}
              >
                We are a polish community of programmers working together
                to optimize your business, so you&apos;ll have more time for really important things
              </Box>
              <Box component="p">
                We are experts in web applications. Out stack is HTML5, CSS3, JavaScript
                (React, Node) and PHP (Symfony, Laravel, Magento 2).
              </Box>
              <Box sx={{ fontWeight: 'bold' }}>Start your story with us!</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
