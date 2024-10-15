import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chats: JSON.parse(localStorage.getItem('chats')) || [],
  selectedUser: JSON.parse(localStorage.getItem('selectedUser')) || null,
}

const chatSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addChat(state, action) {
      state.chats.push(action.payload)
      localStorage.setItem('chats', JSON.stringify(state.chats))
    },
    selectUser(state, action) {
      state.selectedUser = action.payload
      localStorage.setItem('selectedUser', JSON.stringify(action.payload))
    },
    deselectUser(state) {
      state.selectedUser = null
      localStorage.removeItem('selectedUser')
    },
  },
})

export default chatSlice.reducer

export const { addChat, selectUser, deselectUser } = chatSlice.actions
