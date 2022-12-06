import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import {
  Box, List, ListItem, CircularProgress,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import useGet from '../../../hooks/API/useGet'

type ContactData = {
  id: number
  ulid: number
  address: string
  email: string
  phone?: string
  createdAt: string
  updatedAt: string
}

export const ContactInfo: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ContactData>()
  const { data: contactInfoArray, isLoading, error } = useGet('contact-info')

  useEffect(() => {
    if (!isLoading && !error) {
      setContactInfo(contactInfoArray[0])
    }
  }, [contactInfoArray])

  return (
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
        {isLoading ? (
          <CircularProgress size={24} sx={{ color: '#000000', ml: '16px' }} />) : (
            <div>
              {error ? (
                <Box
                  component="p"
                  sx={{
                    fontSize: '16px', m: 0, ml: '16px', fontWeight: 'normal',
                  }}
                >
                  Something went wrong when loading data
                </Box>
              ) : (
                <>
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
                    {contactInfo?.email}
                  </ListItem>
                  <ListItem sx={{
                    pl: {
                      laptop: '16px',
                      xs: 0,
                    },
                  }}
                  >
                    <LocationOnOutlinedIcon sx={{ width: '30px', height: '30px', mr: '10px' }} />
                    {contactInfo?.address}
                  </ListItem>
                </>
              )}
            </div>
        )}
      </List>
    </Box>
  )
}
