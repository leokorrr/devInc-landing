import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import IProject from './ProjectCard.interface'
import { StyledProjectCard } from './ProjectCard.style'

export const ProjectCard: React.FC<IProject> = (props) => {
  const {
    name,
    link,
    thumbnail,
    maxWidth,
    imageHeight,
  } = props

  const isMobile = useMediaQuery('(max-width:600px)')

  return (
    <StyledProjectCard>
      <Box
        sx={{
          maxWidth,
          display: isMobile ? 'flex' : 'block',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        className="project-card"
      >
        <Box component="img" sx={{ height: imageHeight }} src={thumbnail} alt="thumbnail" />
        <div className="project-card__content">
          <a href={link}>{name}</a>
        </div>
      </Box>
    </StyledProjectCard>
  )
}
