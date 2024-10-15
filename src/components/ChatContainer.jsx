import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Message from './Message'
import MessageComponent from './MessageComponent'
import { Grid2 } from '@mui/material'
import Gravatar from 'react-gravatar'

export default function ChatContainer() {
  const { chats, selectedUser } = useSelector((store) => store.chats)
  const { users } = useSelector((store) => store.users)
  const { id } = useParams()
  const chatsToShow = chats.filter(
    (chat) =>
      (chat.to === id && chat.from === selectedUser.id) ||
      (chat.to === selectedUser.id && chat.from === id)
  )

  const currentChatUser = users.find((user) => user.id === id)

  // Reference to the last message
  const lastMessageRef = useRef(null)

  useEffect(() => {
    // Scroll to the last message whenever chatsToShow updates
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chatsToShow])

  return (
    <Grid2
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Grid2 container spacing={1}>
        <Grid2>
          <Gravatar
            email={currentChatUser.email}
            style={{ borderRadius: '50%' }}
          />
        </Grid2>
        <Grid2 sx={{ display: 'flex', alignItems: 'center' }}>
          Chatting with
          <strong style={{ marginLeft: '5px' }}>
            <u>{currentChatUser.name}</u>
          </strong>
        </Grid2>
      </Grid2>
      <Grid2>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            overflowY: 'auto',
            height: '60vh',
            margin: '20px',
          }}
        >
          {chatsToShow.map((message, index) => (
            <MessageComponent message={message} key={message.id} />
          ))}
          <p ref={lastMessageRef}></p>
        </section>
        <Message />
      </Grid2>
    </Grid2>
  )
}
