import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import Link from '@mui/material/Link'

export const Footer: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:768px)')

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#F8F9FA',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        height: isMobile ? '100px' : '150px',
        alignItems: 'center',
        maxWidth: '1480px',
        width: '100%',
        px: '20px',
      }}
      >
        <Box>
          <Link href="https://www.facebook.com/devincubator">
            <FacebookRoundedIcon sx={{
              width: '36px',
              height: '36px',
              color: '#3B5998',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
            />
          </Link>
        </Box>
        <div>&copy; 2022, devInc</div>
      </Box>
    </Box>
  )
}
