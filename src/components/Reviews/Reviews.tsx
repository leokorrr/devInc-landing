import { Box } from '@mui/material'
import React from 'react'
import { Title } from '../../ui/components/Title'
import { Review } from './Review/Review'

type Project = {
  id: number
  ulid: string
  text: string
  author: string
  link?: string
  projectLink?: string
  createdAt: string
  updatedAt: string
}

export const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      ulid: '01GQJ7DN5VB7QDPHQ1DS12F97X',
      text: 'Excellent communicators and hard workers.',
      author: 'Anton Goodman, Australia',
      link: 'https://www.upwork.com/freelancers/~019253d1f836bdc73d',
      createdAt: '2023-01-24 15:47:51.108',
      updatedAt: '2023-01-24 15:47:51.108'
    },
    {
      id: 2,
      ulid: '01GQJ7F4HMYEDF53VHWZ2XSKRX',
      text: 'Leo’s react js and css is topnotch and we enjoyed working with Leo. We hope to continue working with him in the future.',
      author: 'Jordan, United States',
      link: 'https://www.upwork.com/freelancers/~019253d1f836bdc73d',
      // projectLink: 'https://iffy.space/demo',
      createdAt: '2023-01-24 15:48:39.605',
      updatedAt: '2023-01-24 15:48:39.605'
    },
    {
      id: 2,
      ulid: '01GQJ7F4HMYEDF53VHWZ2XSKRX',
      text: "Leo has tremendous skills that are critical for any team to succeed. His capacity for analysis, approach to problem and resolution are outstanding. He 'gets it' right away and his focus to solve issues is like a laser beam. His communication style is highly effective, especially coupled with his personality...",
      author: 'Boris, Canada',
      link: 'https://www.upwork.com/freelancers/~019253d1f836bdc73d',
      createdAt: '2023-01-24 15:48:39.605',
      updatedAt: '2023-01-24 15:48:39.605'
    }
  ]

  return (
    <Box
      id="reviews"
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
          <Title title="Reviews" size={2} />
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
                laptop: '20px',
                xs: '8px'
              }
            }}>
            {reviews?.map((review: Project) => (
              <Review
                key={review.ulid}
                text={review.text}
                author={review.author}
                projectLink={review?.projectLink}
                link={review?.link}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
