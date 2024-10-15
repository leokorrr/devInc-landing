import { Box, Link, useMediaQuery } from '@mui/material'
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
        mb: '60px'
      }}>
      <Box
        sx={{
          maxWidth: '1480px',
          width: '100%',
          px: '20px'
        }}>
        <Title title="About" size={2} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          <Box
            sx={{
              maxWidth: '1200px',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              gap: {
                laptop: '190px',
                xs: '20px'
              }
            }}>
            {!isTablet && (
              <Box
                sx={{
                  width: {
                    laptop: '100%',
                    xs: '50%'
                  }
                }}>
                <Box component="img" sx={{ width: '100%' }} src={aboutUsImage} alt="about-us" />
              </Box>
            )}
            <Box
              sx={{
                fontSize: {
                  laptop: '20px',
                  xs: '18px'
                },
                maxWidth: {
                  tablet: '500px',
                  xs: 'none'
                }
              }}>
              <Box
                component="p"
                sx={{
                  mt: {
                    tablet: '18px',
                    xs: 0
                  }
                }}>
                At devInc, we specialize in web development for early-stage startups, helping you
                turn ideas into functional, scalable MVPs. Our team of full-stack web developers
                understands the need for speed and flexibility in startup environments. We create
                custom web solutions that allow you to launch quickly, validate your product, and
                scale your business. Whether you need a responsive website or a complex web app,
                we&apos;re here to ensure your vision becomes reality—efficiently and effectively.
              </Box>
              <Box sx={{ fontWeight: 'bold' }}>
                <Link
                  href="#contact"
                  sx={{
                    color: '#000000',
                    textDecoration: 'none',
                    transition: '.2s',
                    '&:hover': {
                      color: '#D2042D'
                    }
                  }}>
                  Contact me and let&apos;s see what can we do together
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
