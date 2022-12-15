import { Box, Link } from '@mui/material'
import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import IReview from './Review.interface'

export const Review: React.FC<IReview> = (props) => {
  const {
    text, author, link, projectLink,
  } = props

  return (
    <Box sx={{
      boxShadow: '0 15px 24px rgba(0, 0, 0, 0.08)',
      p: '20px',
      borderRadius: '40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
    }}
    >
      <Box sx={{ position: 'absolute', right: 0, top: '0px' }}>
        <Link
          href={link}
          sx={{
            color: '#000000',
            textDecoration: 'none',
            transition: '.2s',
            '&:hover': {
              color: '#D2042D',
            },
          }}
          target="_blank"
        >
          <OpenInNewIcon />
        </Link>

      </Box>
      <Box component="p" sx={{ fontStyle: 'italic' }}>
        &quot;
        {text}
        &quot;
      </Box>
      <Box sx={{
        display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse', fontWeight: '600',
      }}
      >
        <Box>{author}</Box>
        {projectLink && (
        <Link
          sx={{
            color: '#000000',
            textDecoration: 'none',
            transition: '.2s',
            '&:hover': {
              color: '#D2042D',
            },
          }}
          target="_blank"
          href={projectLink}
        >
          Check project!
        </Link>
        )}
      </Box>
    </Box>
  )
}
