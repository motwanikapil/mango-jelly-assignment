import { useSelector } from 'react-redux'
import ChatComponent from './ChatComponent'
import { Box, Stack } from '@mui/material'

export default function ChatList() {
  const { selectedUser } = useSelector((store) => store.chats)
  const { users } = useSelector((store) => store.users)

  if (!selectedUser || !users) return <main>No chats to Display...</main>

  const filteredUsers = users.filter((user) => user.id !== selectedUser.id)

  return (
    <main style={{ height: '85vh', overflowY: 'scroll' }}>
      <h2 style={{ display: 'flex' }}>
        <p style={{ margin: 'auto' }}>Chats</p>
      </h2>
      <Box sx={{ width: '100%' }}>
        <Stack spacing={1}>
          {filteredUsers.map((user) => (
            <ChatComponent user={user} key={user.id} />
          ))}
        </Stack>
      </Box>
    </main>
  )
}
