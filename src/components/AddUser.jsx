import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { Button, Grid2, Stack, TextField } from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { addUser } from '../redux/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const userSchema = yup.object({
  name: yup.string().required().min(3).max(25),
  email: yup.string().required().trim().email(),
})

export default function AddUser() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  function onSubmit(data) {
    const newUser = {
      ...data,
      id: crypto.randomUUID(),
    }
    dispatch(addUser(newUser))
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} style={{ textAlign: 'center', width: '100%' }}>
        <h1>Add User</h1>
        <section>
          <TextField
            placeholder="Enter your name"
            {...register('name')}
            variant="outlined"
            error={errors.name ? true : false}
            helperText={errors.name ? errors.name.message : ''}
            sx={{ width: '80%' }}
          />
        </section>
        <section>
          <TextField
            placeholder="Enter your email"
            {...register('email')}
            variant="outlined"
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : ''}
            sx={{ width: '80%' }}
          />
        </section>
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <Button type="submit" variant="contained" sx={{ width: '50%' }}>
              Submit
            </Button>
          </Grid2>
          <Grid2 size={6}>
            <Button
              color="error"
              onClick={reset}
              variant="contained"
              sx={{ width: '50%' }}
            >
              Reset
            </Button>
          </Grid2>
        </Grid2>
      </Stack>
    </form>
  )
}
