import { configureStore } from '@reduxjs/toolkit'
import chatReducer from './slices/chatSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    chats: chatReducer,
    users: userReducer,
  },
})
