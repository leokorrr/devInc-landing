import { Box } from '@mui/material'
import React from 'react'
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
  const projects = [
    {
      id: 1,
      ulid: '01GQJ8FQ65VKCG80MKM4507936',
      title: 'GMR',
      image:
        'https://res.cloudinary.com/dm7kdvy9u/image/upload/v1675064712/devInc%20Landing/gmr_thumbnail_n0nl0x.jpg',
      link: 'https://gmr.center/',
      createdAt: '2023-01-24 16:06:27.271',
      updatedAt: '2023-01-24 16:06:27.271'
    },
    {
      id: 4,
      ulid: '01GQJ8HT9TG7C190XAVJ26J8F2',
      title: 'MoneyGeek',
      image:
        'https://res.cloudinary.com/dm7kdvy9u/image/upload/v1674659788/devInc%20Landing/moneygeek-thumbnail_x02ehp.jpg',
      link: 'https://www.moneygeek.com/',
      createdAt: '2023-01-24 16:07:35.995',
      updatedAt: '2023-01-24 16:07:35.995'
    },
    {
      id: 2,
      ulid: '01GQJ8GRMF254G2V5BQ6HD6QHW',
      title: 'Magnolia',
      image:
        'https://res.cloudinary.com/dm7kdvy9u/image/upload/v1675064748/devInc%20Landing/magnolia_thumbnail_ifwblz.jpg',
      link: 'https://www.magnoliahq.com/',
      createdAt: '2023-01-24 16:07:01.521',
      updatedAt: '2023-01-24 16:07:01.521'
    },
    {
      id: 6,
      ulid: '01GQJ8M1YDPTTEHWJ8J4ENBZJW',
      title: 'ElevPraktik',
      image:
        'https://res.cloudinary.com/dm7kdvy9u/image/upload/v1675064778/devInc%20Landing/elevpraktik_thumbnail_d3pfaz.jpg',
      link: 'https://www.elevpraktik.dk/',
      createdAt: '2023-01-24 16:08:49.359',
      updatedAt: '2023-01-24 16:08:49.359'
    },
    {
      id: 5,
      ulid: '01GQJ8KFDK2TK63JYERV259R0R',
      title: 'Eca Invest',
      image:
        'https://res.cloudinary.com/dm7kdvy9u/image/upload/v1675064812/devInc%20Landing/eca_invest_thumbnail_c3p4s2.jpg',
      link: 'https://eca-invest.pl/',
      createdAt: '2023-01-24 16:08:30.389',
      updatedAt: '2023-01-24 16:08:30.389'
    },
    {
      id: 3,
      ulid: '01GQJ8H9QCV5CWK30SG0VAPYPE',
      title: 'Iffy',
      image:
        'https://res.cloudinary.com/dm7kdvy9u/image/upload/v1675064832/devInc%20Landing/iffy_thumbnail_zfnv92.jpg',
      link: 'https://iffy.space/',
      createdAt: '2023-01-24 16:07:19.021',
      updatedAt: '2023-01-24 16:07:19.021'
    },
    {
      id: 7,
      ulid: '01H9QR4ASE2Y8S9K2772PVF8K1',
      title: 'Diktat',
      image: 'https://res.cloudinary.com/dm7kdvy9u/image/upload/v1694087670/diktat-bg.jpg',
      link: 'https://www.diktat.dk/',
      createdAt: '2023-09-07 13:58:59',
      updatedAt: '2023-09-07 13:59:01'
    }
  ]

  return (
    <Box
      id="portfolio"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        pb: '60px',
        backgroundColor: '#F8F9FA'
      }}>
      <Box
        sx={{
          maxWidth: '1480px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            pl: '20px'
          }}>
          <Title title="Portfolio" size={2} />
        </Box>
        <Box
          sx={{
            maxWidth: {
              laptop: '1480px',
              xs: '1201px'
            },
            width: '100%',
            px: '20px'
          }}>
          <Box
            sx={{
              display: {
                tablet: 'grid',
                xs: 'flex'
              },
              flexDirection: {
                tablet: 'unset',
                xs: 'column'
              },
              gridTemplateRows: 'repeat(1, 1fr)',
              gridTemplateColumns: {
                laptop: 'repeat(3, 1fr)',
                xs: 'repeat(2, 1fr)'
              },
              gap: {
                laptop: 0,
                xs: '8px'
              }
            }}>
            {projects?.map((project: Project) => (
              <ProjectCard
                key={project.ulid}
                name={project.title}
                link={project.link}
                thumbnail={project.image}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
