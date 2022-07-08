import {
  Box, Button, Input, TextareaAutosize,
} from '@mui/material'
import React, { useState } from 'react'
import IContactForm from './ContactForm.interface'

const INPUTS = [
  {
    title: 'name',
    placeholder: 'Your Name*',
    isRequired: true,
  },
  {
    title: 'email',
    placeholder: 'Your Email*',
    isRequired: true,
  },
  {
    title: 'phone',
    placeholder: 'Your Phone',
    isRequired: false,
  },
]

const EMAIL_REGEX_PATTERN = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const ContactForm: React.FC<IContactForm> = (props) => {
  const { isLaptop, isTablet, isMobile } = props

  const [formValues, setFormValues] = useState<any>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [errors, setErrors] = useState<any>({
    name: '',
    email: '',
    message: '',
  })

  const handleInput = (paramName: string) => (event: any) => {
    const { value } = event.target
    setFormValues({ ...formValues, [paramName]: value })
  }

  const handleFormSend = (event: any) => {
    event.preventDefault()

    const validationErrors: any = {
      name: '',
      email: '',
      message: '',
    }

    Object.keys(formValues).forEach((key) => {
      if (formValues[key] === '' && key !== 'phone') {
        validationErrors[key] = `${key.charAt(0).toUpperCase()}${key.slice(1)} is required`
      }

      if (formValues.email && !formValues.email.toLowerCase().match(EMAIL_REGEX_PATTERN)) {
        validationErrors.email = 'Provide valid email'
      }
    })

    setErrors(validationErrors)
  }

  return (
    <Box sx={{
      backgroundColor: '#000000',
      p: isTablet ? '20px' : '40px',
      width: isLaptop ? '100%' : '990px',
    }}
    >
      <Box
        component="form"
        sx={{ display: 'flex', flexDirection: 'column' }}
        noValidate
      >
        {INPUTS.map((input) => (
          <Box key={input.title} sx={{ width: '100%', mb: '24px' }}>
            <Input
              placeholder={input.placeholder}
              required={input.isRequired}
              disableUnderline
              onChange={handleInput(input.title)}
              sx={{
                color: '#FFFFFF',
                borderBottom: '2px solid #FFFFFF',
                mb: '16px',
                p: '6px 12px',
                width: '100%',
                '& > input:-webkit-autofill': {
                  WebkitTextFillColor: '#FFFFFF !important',
                  WebkitBoxShadow: '0 0 0px 1000px #000 inset',
                },
              }}
            />
            {errors[input.title] && input.isRequired && <Box sx={{ color: 'red', fontSize: '14px' }}>{errors[input.title]}</Box>}
          </Box>
        ))}
        <Box sx={{ mb: '32px', width: '100%' }}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={8}
            placeholder="Your Message"
            onChange={handleInput('message')}
            style={{
              width: '100%',
              color: '#FFFFFF',
              backgroundColor: 'transparent',
              borderBottom: '2px solid #FFFFFF',
              marginBottom: '8px',
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              resize: 'none',
              paddingLeft: '12px',
              outline: 'none',
              fontFamily: 'Montserrat',
              fontSize: '16px',
            }}
          />
          {errors.message && <Box sx={{ color: 'red', fontSize: '14px' }}>{errors.message}</Box>}
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: isMobile ? 'center' : 'flex-starts',
        }}
        >
          <Button
            variant="contained"
            type="submit"
            onClick={handleFormSend}
            sx={{
              backgroundColor: '#FFFFFF',
              fontWeight: 'bold',
              fontSize: '20px',
              width: isMobile ? '100%' : '140px',
              height: isMobile ? '40px' : '52px',
              borderRadius: '45px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#ffffff',
              },
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
