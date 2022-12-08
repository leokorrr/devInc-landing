import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box, CircularProgress } from '@mui/material'
import Link from '@mui/material/Link'
import React from 'react'
import useGet from '../../../hooks/API/useGet'

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
  LinkedIn: <LinkedInIcon sx={{
    width: '36px',
    height: '36px',
    color: '#3B5998',
    '&:hover': {
      cursor: 'pointer',
    },
  }}
  />,
}

export const Footer: React.FC = () => {
  const { data: socialLinks, isLoading, error } = useGet('social-links')

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
        height: {
          tablet: '150px',
          xs: '100px',
        },
        alignItems: 'center',
        maxWidth: '1480px',
        width: '100%',
        px: '20px',
      }}
      >
        <Box>
          {isLoading ? (
            <CircularProgress size={16} sx={{ color: '#000000' }} />
          ) : (
            <div>
              {error ? <Box component="p" sx={{ fontSize: '12px', m: 0 }}>Something went wrong when loading data</Box> : (
                <>
                  {socialLinks.map((socialLink: SocialLink) => (
                    <Link key={socialLink.ulid} sx={{ display: 'flex' }} href={socialLink.link}>
                      {ICONS[socialLink.title]}
                    </Link>
                  ))}
                </>
              )}
            </div>
          )}
        </Box>
        <div>&copy; 2022, devInc</div>
      </Box>
    </Box>
  )
}
