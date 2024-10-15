import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { Box, List, ListItem } from '@mui/material'
import React from 'react'

// type ContactData = {
//   id: number
//   ulid: string
//   address: string
//   email: string
//   phone?: string
//   createdAt: string
//   updatedAt: string
// }

export const ContactInfo: React.FC = () => {
  const contactInfo = {
    id: 1,
    ulid: '1GQJ7BZ81MYBAWK3XY0GD89XJ',
    email: 'leon.zisman.devinc@gmail.com',
    address: 'Gdansk, Poland',
    createdAt: '2023-01-24 15:46:55.88',
    updatedAt: '2023-01-24 15:46:55.88'
  }

  return (
    <Box
      sx={{
        width: '100%',
        mt: {
          laptop: '192px',
          xs: '20px'
        },
        pb: {
          laptop: '60px',
          xs: '20px'
        }
      }}>
      <List
        sx={{
          backgroundColor: '#FFFFFF',
          fontWeight: 'bold',
          height: {
            laptop: '594px',
            xs: 'unset'
          },
          width: {
            desktopSmall: '450px',
            laptopBig: '80%',
            xs: '85%'
          },
          fontSize: {
            xs: '16px',
            laptop: '18px',
            desktopSmall: '20px'
          },
          pl: {
            laptop: '12px',
            xs: 0
          },
          pt: {
            laptop: '32px',
            xs: 0
          },
          mr: '20px'
        }}>
        <>
          <ListItem
            sx={{
              mb: '12px',
              pl: {
                laptop: '16px',
                xs: 0
              }
            }}>
            <MailOutlineIcon
              sx={{
                width: '30px',
                height: '30px',
                mr: '10px'
              }}
            />
            {' '}
            {contactInfo?.email}
          </ListItem>
          <ListItem
            sx={{
              pl: {
                laptop: '16px',
                xs: 0
              }
            }}>
            <LocationOnOutlinedIcon sx={{ width: '30px', height: '30px', mr: '10px' }} />
            {contactInfo?.address}
          </ListItem>
        </>
      </List>
    </Box>
  )
}
