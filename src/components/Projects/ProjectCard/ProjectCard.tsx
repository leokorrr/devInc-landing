import { Box } from '@mui/material'
import React from 'react'
import IProject from './ProjectCard.interface'
import { StyledProjectCard } from './ProjectCard.style'

export const ProjectCard: React.FC<IProject> = (props) => {
  const {
    name, link, thumbnail,
  } = props

  return (
    <StyledProjectCard>
      <Box
        sx={{
          maxWidth: {
            desktop: '506px',
            laptop: '387px',
            xs: 'unset',
          },
          justifyContent: 'center',
          alignItems: 'center',
          '& .project-card__image': {
            background: `no-repeat url(${thumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            color: 'red',
          },
        }}
        className="project-card"
      >
        <a href={link}>
          <Box
            className="project-card__image"
            sx={{
              height: {
                xs: '230px',
                mobile: '350px',
                tablet: '232px',
                desktop: '288px',
              },
            }}
          />
          <Box
            className="project-card__content"
            sx={{
              height: {
                xs: '230px',
                mobile: '350px',
                tablet: '232px',
                desktop: '288px',
              },
            }}
          >
            {name}
          </Box>
        </a>
      </Box>
    </StyledProjectCard>
  )
}
