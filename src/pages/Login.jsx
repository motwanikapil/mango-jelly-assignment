import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { TextField, Button, Container, Grid2 } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { selectUser } from '../redux/slices/chatSlice'
import { useNavigate } from 'react-router-dom'

// Validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
})

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const { users } = useSelector((store) => store.users)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (data) => {
    const user = users.find((user) => user.email === data.email)

    if (user) {
      dispatch(selectUser(user))
      navigate('/')
    } else {
      navigate('/user/new')
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
        />
        <Grid2
          container
          spacing={2}
          sx={{ marginTop: '10px', textAlign: 'center' }}
        >
          <Grid2 size={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Button
              color="error"
              type="button"
              onClick={reset}
              variant="contained"
              sx={{ margin: '10px' }}
            >
              Reset
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Container>
  )
}
