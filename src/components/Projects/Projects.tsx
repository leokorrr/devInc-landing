import { Box } from '@mui/material'
import React from 'react'
import { Title } from '../../ui/components/Title'
import { ProjectCard } from './ProjectCard'

const mockedProjects = [
  {
    name: 'Magnolia',
    link: 'https://www.magnoliahq.com/',
    thumbnail: 'https://res.cloudinary.com/dm7kdvy9u/image/upload/v1669817908/magnolia_1_65_x03fsv.jpg',
  },
  {
    name: 'Iffy',
    link: 'https://iffy.space/',
    thumbnail: 'https://res.cloudinary.com/dm7kdvy9u/image/upload/v1669817261/iffy_3_65_tvjdon.jpg',
  },
  {
    name: 'Eca Invest',
    link: 'https://eca-invest.pl/',
    thumbnail: 'https://res.cloudinary.com/dm7kdvy9u/image/upload/v1669817298/eca-invest_1_65_xm7uqh.jpg',
  },
]

export const Projects: React.FC = () => (
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
        maxWidth: {
          laptop: '1480px',
          xs: '1201px',
        },
        width: '100%',
        px: '20px',
      }}
      >
        <Box sx={{
          display: {
            tablet: 'grid',
            xs: 'flex',
          },
          flexDirection: {
            tablet: 'unset',
            xs: 'column',
          },
          gridTemplateRows: 'repeat(1, 1fr)',
          gridTemplateColumns: {
            laptop: 'repeat(3, 1fr)',
            xs: 'repeat(2, 1fr)',
          },
          gap: {
            laptop: 0,
            xs: '8px',
          },
        }}
        >
          {mockedProjects.map((project) => (
            <ProjectCard
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
