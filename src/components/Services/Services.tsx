import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import automatizationIcon from '../../assets/automatizationicon.svg'
import corporateWebsite from '../../assets/corpwebsiteicon.svg'
import mobileAppIcon from '../../assets/mobileappicon.svg'
import userManagementSystemIcon from '../../assets/umsicon.svg'
import webAppIcon from '../../assets/webappicon.svg'
import { ServiceCard } from './ServiceCard/ServiceCard'

const SERVICES = [
  {
    icon: webAppIcon,
    title: 'Web Application',
  },
  {
    icon: corporateWebsite,
    title: 'Corp. Website',
  },
  {
    icon: automatizationIcon,
    title: 'Business Automatization',
  },
  {
    icon: mobileAppIcon,
    title: 'Mobile App',
  },
  {
    icon: userManagementSystemIcon,
    title: 'UMS',
  },
]

export const Services: React.FC = () => {
  const isTablet = useMediaQuery('(max-width:1240px)')

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#F8F9FA',
    }}
    >
      <Box sx={{
        maxWidth: '1480px',
        width: '100%',
        px: '20px',
        overflowY: isTablet ? 'scroll' : 'unset',
        height: '350px',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
      >
        <Box sx={{
          display: 'flex',
          justifyContent: isTablet ? 'none' : 'center',
          gap: '20px',
        }}
        >
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}
