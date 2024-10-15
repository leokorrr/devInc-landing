import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box } from '@mui/material'
import Link from '@mui/material/Link'
import React from 'react'

type IconsOptions = {
  [key: string]: React.ReactElement
}

type SocialLink = {
  id: number
  ulid: string
  link: string
  title: string
  createdAt: string
  updatedAt: string
}

const ICONS: IconsOptions = {
  LinkedIn: (
    <LinkedInIcon
      sx={{
        width: '36px',
        height: '36px',
        color: '#3B5998',
        '&:hover': {
          cursor: 'pointer'
        }
      }}
    />
  )
}

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      id: 1,
      ulid: '01GQJ7AN0N605BVY3D0MR4JXZA',
      link: 'https://www.linkedin.com/in/leon-kochetcov/',
      title: 'LinkedIn',
      createdAt: '2023-01-24 15:46:12.65',
      updatedAt: '2023-01-24 15:46:12.65'
    }
  ]

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#F8F9FA',
        display: 'flex',
        justifyContent: 'center'
      }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: {
            tablet: '150px',
            xs: '100px'
          },
          alignItems: 'center',
          maxWidth: '1480px',
          width: '100%',
          px: '20px'
        }}>
        <Box>
          {socialLinks.map((socialLink: SocialLink) => (
            <Link key={socialLink.ulid} sx={{ display: 'flex' }} href={socialLink.link}>
              {ICONS[socialLink.title]}
            </Link>
          ))}
        </Box>
        <div>&copy; 2024, devInc</div>
      </Box>
    </Box>
  )
}
