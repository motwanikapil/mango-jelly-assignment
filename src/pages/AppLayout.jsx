import { Grid2 } from '@mui/material'
import { Outlet, useParams } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux'
import ChatList from '../components/ChatList'
import { useEffect } from 'react'

export default function AppLayout() {
  const { id } = useParams()
  const { selectedUser } = useSelector((store) => store.chats, shallowEqual)

  return !selectedUser ? (
    <div
      style={{
        width: '100%',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Please Login First...</h1>
    </div>
  ) : (
    <Grid2 container spacing={2}>
      <Grid2 size={3}>
        <ChatList />
      </Grid2>
      <Grid2 size={9}>
        {id ? (
          <Outlet />
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <span>
              {!selectedUser ? 'Login First' : 'Click on a profile to chat.'}
            </span>
          </div>
        )}
      </Grid2>
    </Grid2>
  )
}
