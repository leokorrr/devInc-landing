import { Box } from '@mui/material'
import React from 'react'
import { Title } from '../../ui/components/Title'
import { ContactForm } from './ContactForm'
import { ContactInfo } from './ContactInfo'

export const ContactUs = () => (
  <Box
    id="contact"
    sx={{
      display: 'flex',
      flexDirection: 'row-reverse',
      pl: '20px',
      pr: {
        laptop: 0,
        xs: '20px',
      },
    }}
  >
    <Box sx={{
      display: {
        laptop: 'grid',
        xs: 'flex',
      },
      flexDirection: 'column',
      gridTemplateRows: '1fr',
      gridTemplateColumns: '1.45fr 1fr',
      maxWidth: '1670px',
      width: '100%',
    }}
    >
      <Box>
        <Title title="Contact" size={2} />
        <ContactForm />
      </Box>
      <Box sx={{
        backgroundColor: {
          laptop: '#000000',
          xs: 'transparent',
        },
      }}
      >
        <ContactInfo />
      </Box>
    </Box>

  </Box>
)
