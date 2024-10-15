import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function MessageComponent({ message }) {
  const { id } = useParams()
  const { selectedUser } = useSelector((store) => store.chats)
  const isToMessage = id === message.to
  const { message: msg } = message
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isToMessage ? 'start' : 'end',
        marginTop: '10px',
        marginBottom: '10px',
        backgroundColor: isToMessage ? 'lightblue' : 'lightgreen',
        padding: '15px',
        borderRadius: '10px',
        marginLeft: isToMessage ? 'auto' : '0',
        marginRight: isToMessage ? '0' : 'auto',
      }}
    >
      {msg}
    </div>
  )
}
