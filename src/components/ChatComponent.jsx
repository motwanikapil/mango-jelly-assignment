import { Divider, Paper } from '@mui/material'
import Gravatar from 'react-gravatar'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export default function ChatComponent({ user }) {
  const { id } = useParams()

  const isSelectedChat = id === user.id

  return (
    <Paper
      elevation={isSelectedChat ? 5 : 0}
      sx={{
        marginTop: '20px',
        backgroundColor: isSelectedChat ? 'lightblue' : '',
      }}
    >
      <NavLink
        to={`/user/${user.id}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          padding: '15px',
        }}
      >
        <Gravatar email={user.email} style={{ borderRadius: '50%' }} />
        <p style={{ marginLeft: '10px' }}>{user.name}</p>
      </NavLink>
      <Divider />
    </Paper>
  )
}
