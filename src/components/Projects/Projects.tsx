import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { Title } from '../../ui/components/Title'
import { ProjectCard } from './ProjectCard'

const mockedProjects = [
  {
    name: 'Project',
    link: 'https://www.google.com/',
    thumbnail: 'https://i.pinimg.com/736x/e5/18/f6/e518f68fa36d349f313701f28465cc47.jpg',
  },
  {
    name: 'Project 2',
    link: 'https://www.google.com/',
    thumbnail: 'https://wallpaperaccess.com/full/2029165.jpg',
  },
  {
    name: 'Project 3',
    link: 'https://www.google.com/',
    thumbnail: 'https://i.pinimg.com/736x/e5/18/f6/e518f68fa36d349f313701f28465cc47.jpg',
  },
  {
    name: 'Project 4',
    link: 'https://www.google.com/',
    thumbnail: 'https://wallpaperaccess.com/full/2029165.jpg',
  },
  {
    name: 'Project 5',
    link: 'https://www.google.com/',
    thumbnail: 'https://i.pinimg.com/736x/e5/18/f6/e518f68fa36d349f313701f28465cc47.jpg',
  },
]

export const Projects: React.FC = () => {
  const isLaptop = useMediaQuery('(max-width:1480px)')
  const isLaptopSmall = useMediaQuery('(max-width:1200px)')
  const isMobile = useMediaQuery('(max-width:600px)')

  const getCardMaxWidth = () => {
    if (isLaptopSmall) { return 'unset' }
    if (isLaptop) { return 387 }
    return 506
  }
  const getImageHeight = () => (isLaptop ? '100%' : '300px')

  return (
    <Box
      id="portfolio"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        pb: '60px',
        backgroundColor: '#F8F9FA',
      }}
    >
      <Box sx={{
        maxWidth: '1480px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      >
        <Box sx={{
          width: '100%', display: 'flex', justifyContent: 'flex-start', pl: '20px',
        }}
        >
          <Title title="Portfolio" size={2} />
        </Box>
        <Box sx={{
          maxWidth: isLaptop ? '1201px' : '1480px',
          width: '100%',
          px: '20px',
        }}
        >
          <Box sx={{
            display: isMobile ? 'flex' : 'grid',
            flexDirection: isMobile ? 'column' : 'unset',
            gridTemplateRows: 'repeat(2, 1fr)',
            gridTemplateColumns: isLaptopSmall ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: isLaptopSmall ? '8px' : 0,
          }}
          >
            {mockedProjects.map((project) => (
              <ProjectCard
                maxWidth={getCardMaxWidth()}
                imageHeight={getImageHeight()}
                key={project.name}
                name={project.name}
                link={project.link}
                thumbnail={project.thumbnail}
              />
            ))}
          </Box>
        </Box>
      </Box>

    </Box>
  )
}
