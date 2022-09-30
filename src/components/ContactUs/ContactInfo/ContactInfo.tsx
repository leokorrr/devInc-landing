import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import {
  Box, List, ListItem,
} from '@mui/material'
import React from 'react'
import IContactInfo from './ContactInfo.interface'

export const ContactInfo: React.FC<IContactInfo> = (props) => {
  const {
    isLaptop, isLaptopSmall, isTablet,
  } = props

  const getWidth = () => {
    let width

    if (isLaptop && !isLaptopSmall) {
      width = '80%'
    } else if (isLaptopSmall) {
      width = '85%'
    } else {
      width = '450px'
    }

    return width
  }

  const getFontSize = () => {
    let fontSize

    if (isLaptop && !isLaptopSmall) {
      fontSize = '18px'
    } else if (isTablet) {
      fontSize = '16px'
    } else {
      fontSize = '20px'
    }

    return fontSize
  }

  return (
    <Box sx={{ width: '100%', mt: isTablet ? '20px' : '192px', pb: isTablet ? '20px' : '60px' }}>
      <List sx={{
        backgroundColor: '#FFFFFF',
        fontWeight: 'bold',
        height: isTablet ? 'unset' : '588px',
        width: getWidth(),
        fontSize: getFontSize(),
        pl: isTablet ? 0 : '12px',
        pt: isTablet ? 0 : '32px',
        mr: '20px',
      }}
      >
        <ListItem sx={{ mb: '12px', pl: isTablet ? 0 : '16px' }}>
          <MailOutlineIcon sx={{
            width: '30px', height: '30px', mr: '10px',
          }}
          />
          {' '}
          contact.devincubator@gmail.com
        </ListItem>
        <ListItem sx={{ pl: isTablet ? 0 : '16px' }}>
          <LocationOnOutlinedIcon sx={{ width: '30px', height: '30px', mr: '10px' }} />
          Gdansk, Poland
        </ListItem>
      </List>
    </Box>
  )
}
