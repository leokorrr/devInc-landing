import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import {
  Box, List, ListItem,
} from '@mui/material'
import React from 'react'

export const ContactInfo: React.FC = () => (
  <Box sx={{
    width: '100%',
    mt: {
      laptop: '192px',
      xs: '20px',
    },
    pb: {
      laptop: '60px',
      xs: '20px',
    },
  }}
  >
    <List sx={{
      backgroundColor: '#FFFFFF',
      fontWeight: 'bold',
      height: {
        laptop: '588px',
        xs: 'unset',
      },
      width: {
        desktopSmall: '450px',
        laptopBig: '80%',
        xs: '85%',
      },
      fontSize: {
        xs: '16px',
        laptop: '18px',
        desktopSmall: '20px',
      },
      pl: {
        laptop: '12px',
        xs: 0,
      },
      pt: {
        laptop: '32px',
        xs: 0,
      },
      mr: '20px',
    }}
    >
      <ListItem sx={{
        mb: '12px',
        pl: {
          laptop: '16px',
          xs: 0,
        },
      }}
      >
        <MailOutlineIcon sx={{
          width: '30px', height: '30px', mr: '10px',
        }}
        />
        {' '}
        leonid.kochetcov@gmail.com
      </ListItem>
      <ListItem sx={{
        pl: {
          laptop: '16px',
          xs: 0,
        },
      }}
      >
        <LocationOnOutlinedIcon sx={{ width: '30px', height: '30px', mr: '10px' }} />
        Gdansk, Poland
      </ListItem>
    </List>
  </Box>
)
