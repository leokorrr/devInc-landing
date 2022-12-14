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
                Hi! My name is Leo! I&apos;m a professional fullstack developer with 5+ years of
                experience. My job is to optimize your business, so you&apos;ll have more time
                for really important things
              </Box>
              <Box component="p">
                I&apos;m an expert in web applications. My stack is React, Next, Typescript, Node,
                Express, Nest and more...
              </Box>
              <Box sx={{ fontWeight: 'bold' }}>Contact me and let&apos;s see what can we do together</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
