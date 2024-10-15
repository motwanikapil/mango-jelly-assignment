import { useNavigate } from 'react-router-dom'
import {
  Button,
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
} from '@mui/material'
import { deselectUser } from '../redux/slices/chatSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function ButtonAppBar() {
  const navigate = useNavigate()
  const { selectedUser } = useSelector((store) => store.chats)
  const dispatch = useDispatch()
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'lightgray',
        padding: '10px',
        marginBottom: '10px',
      }}
    >
      <Button onClick={() => navigate('/')}>Mango Jelly Chat</Button>
      {!selectedUser ? (
        <Button onClick={() => navigate('/login')}>Login</Button>
      ) : (
        <Button
          onClick={() => {
            dispatch(deselectUser())
            navigate('/')
          }}
        >
          Logout
        </Button>
      )}
      <Button onClick={() => navigate('/user/new')}>Add New User</Button>
    </Box>
  )
}
