import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import useGet from '../../hooks/useGet'
import { Title } from '../../ui/components/Title'
import { ProjectCard } from './ProjectCard'

type Project = {
  id: number
  ulid: string
  title: string
  image: string
  link: string
  createdAt: string
  updatedAt: string
}

export const Projects: React.FC = () => {
  const { data: projects, isLoading, error } = useGet('projects')

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
          maxWidth: {
            laptop: '1480px',
            xs: '1201px',
          },
          width: '100%',
          px: '20px',
        }}
        >
          {isLoading ? (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <CircularProgress size={32} sx={{ color: '#000000' }} />
            </Box>
          ) : (
            <div>
              {error ? <Box component="p" sx={{ fontSize: '16px', m: 0 }}>Something went wrong when loading data</Box> : (
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
                  {projects?.map((project: Project) => (
                    <ProjectCard
                      key={project.ulid}
                      name={project.title}
                      link={project.link}
                      thumbnail={project.image}
                    />
                  ))}
                </Box>
              )}
            </div>
          )}
        </Box>
      </Box>
    </Box>
  )
}
