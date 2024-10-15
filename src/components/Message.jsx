import React, { useEffect, useRef } from 'react'
import { Button, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Send } from '@mui/icons-material'
import { addChat } from '../redux/slices/chatSlice'
import { useForm, Controller } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export default function Message() {
  const { selectedUser } = useSelector((store) => store.chats)
  const { id } = useParams()
  const dispatch = useDispatch()

  // Define validation schema
  const validationSchema = Yup.object({
    message: Yup.string()
      .required('Message is required')
      .min(1, 'Message must be at least 1 character long')
      .max(500, 'Message cannot exceed 500 characters'),
  })

  // Initialize react-hook-form
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data) => {
    const newChat = {
      id: crypto.randomUUID(),
      message: data.message,
      to: id,
      from: selectedUser.id,
      timestamp: Date.now(),
    }
    dispatch(addChat(newChat))
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', width: '100%' }}
    >
      <Controller
        name="message"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            placeholder="Type your message..."
            style={{ width: '100%' }}
            variant="outlined"
            error={!!errors.message}
            helperText={errors.message ? errors.message.message : ''}
            autoFocus
          />
        )}
      />
      <Button type="submit">
        <Send />
      </Button>
    </form>
  )
}
