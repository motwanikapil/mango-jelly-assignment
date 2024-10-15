import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: JSON.parse(localStorage.getItem('users')) || [],
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload)
      localStorage.setItem('users', JSON.stringify(state.users))
    },
  },
})

export default userSlice.reducer

export const { addUser } = userSlice.actions
