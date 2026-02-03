import { useForm } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  message: string
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`Website Inquiry from ${data.name}`)
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)
    window.location.href = `mailto:data@runlytics.com?subject=${subject}&body=${body}`
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        error={!!errors.name}
        helperText={errors.name?.message}
        {...register('name', { required: 'Name is required' })}
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        fullWidth
        error={!!errors.email}
        helperText={errors.email?.message}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Enter a valid email',
          },
        })}
      />
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        error={!!errors.message}
        helperText={errors.message?.message}
        {...register('message', { required: 'Message is required' })}
      />
      <Button
        type="submit"
        variant="contained"
        endIcon={<SendIcon />}
        sx={{
          py: 1.5,
          background: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
          },
        }}
      >
        Send Message
      </Button>
      {submitted && (
        <p className="text-center text-sm text-green-400">
          Your email client should open shortly. Thank you!
        </p>
      )}
    </form>
  )
}

export default ContactForm
