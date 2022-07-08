import { Box } from '@mui/material'
import React from 'react'
import { Title } from '../../ui/components/Title'
import { FAQItem } from './FAQItem'

const MOCK_FAQS = [
  {
    question: 'Question 1?',
    answer: 'We are a polish community of programmers working together to help our clients to push their business forward.',
  },
  {
    question: 'Question 2?',
    answer: 'We are a polish community of programmers working together to help our clients to push their business forward.',
  },
  {
    question: 'Question 3?',
    answer: 'We are a polish community of programmers working together to help our clients to push their business forward.',
  },
]

export const FAQ: React.FC = () => (
  <Box
    id="faq"
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
      px: '20px',
    }}
    >
      <Title title="FAQ" size={2} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{
          maxWidth: '960px',
          width: '100%',
        }}
        >
          {MOCK_FAQS.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
)
