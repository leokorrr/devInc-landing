import {
  Box, Button, Input, TextareaAutosize, CircularProgress,
} from '@mui/material'
import React, {
  useState, ChangeEvent, MouseEvent,
} from 'react'
import emailjs from '@emailjs/browser'

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

const INIT_FORM_VALUES = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

type FormValues = {
  name: string
  email: string
  phone: string
  message: string
}

type FormErrors = Omit<FormValues, 'phone'>

export const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>(INIT_FORM_VALUES)
  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    message: '',
  })
  const [isFormSending, setIsFormSending] = useState<boolean>(false)
  const [isFormSendingError, setIsFormSendingError] = useState<boolean>(false)

  // eslint-disable-next-line max-len
  const handleInput = (paramName: string) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target
    setFormValues({ ...formValues, [paramName]: value })
  }

  const handleFormValidation = () => {
    let isError = false

    const validationErrors: FormErrors = {
      name: '',
      email: '',
      message: '',
    }

    Object.keys(formValues).forEach((key: string) => {
      if (formValues[key as keyof FormValues] === '' && key !== 'phone') {
        validationErrors[key as keyof FormErrors] = `${key.charAt(0).toUpperCase()}${key.slice(1)} is required`
        isError = true
      }

      if (formValues.email && !formValues.email.toLowerCase().match(EMAIL_REGEX_PATTERN)) {
        validationErrors.email = 'Provide valid email'
        isError = true
      }
    })

    setErrors(validationErrors)

    return isError
  }

  const handleFormSend = async (event: MouseEvent) => {
    event.preventDefault()

    const isError = handleFormValidation()

    if (!isError) {
      setIsFormSending(true)
      setIsFormSendingError(false)

      try {
        const res = await emailjs.sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_ID,
          process.env.REACT_APP_EMAIL_TEMPLATE_ID,
          '#contact-form',
          process.env.REACT_APP_EMAIL_PUBLIC_KEY,
        )

        if (res.status === 200) setFormValues(INIT_FORM_VALUES)
      } catch (error) {
        setIsFormSendingError(true)
        console.log(error)
      }

      setIsFormSending(false)
    }
  }

  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        p: {
          laptop: '40px',
          xs: '20px',
        },
        width: {
          desktopSmall: '990px',
          xs: '100%',
        },
      }}
    >
      <Box id="contact-form" component="form" sx={{ display: 'flex', flexDirection: 'column' }} noValidate>
        {isFormSendingError && <Box sx={{ color: 'red', fontSize: '16px', mb: '16px' }}>Something went wrong sending your mail. Try again or write directly at provided email.</Box>}
        {INPUTS.map((input) => (
          <Box key={input.title} sx={{ width: '100%', mb: '24px' }}>
            <Input
              placeholder={input.placeholder}
              required={input.isRequired}
              disableUnderline
              onChange={handleInput(input.title)}
              name={input.title}
              value={formValues[input.title as keyof FormErrors]}
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
            {errors[input.title as keyof FormErrors] && input.isRequired && (
              <Box sx={{ color: 'red', fontSize: '14px' }}>{errors[input.title as keyof FormErrors]}</Box>
            )}
          </Box>
        ))}
        <Box sx={{ mb: '32px', width: '100%' }}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={8}
            placeholder="Your Message"
            onChange={handleInput('message')}
            name="message"
            value={formValues.message}
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: {
              tablet: 'flex-start',
              xs: 'center',
            },
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
              width: {
                tablet: '140px',
                xs: '100%',
              },
              height: {
                tablet: '52px',
                xs: '40px',
              },
              borderRadius: '45px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#ffffff',
              },
            }}
          >
            {isFormSending && <CircularProgress size={16} sx={{ color: '#000000', mr: '8px' }} />}
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
