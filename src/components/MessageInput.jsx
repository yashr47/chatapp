import React, { useState } from 'react'

export const MessageInput = ({state, dispatch}) => {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if(message.trim()){
      
      const payload = {
        id: state.currentChatId,
        message: {
          // sender: Math.random() > 0.5 ? 'self' : state.chats[state.currentChatId].title,  <-- Uncomment this line to simulate 2 person chat
          sender: 'self',
          time: Date.now(),
          content: message
        }
      }
      dispatch({
        type: 'SEND_MESSAGE',
        payload
      })
      setMessage('')
    }
  }

  return (
    <div className='message-input' onKeyDown={(e) => {
      if(e.key === 'Enter') handleSend()
    }}>
      <input type='text' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Type something here...' />
      <button onClick={handleSend}>Send</button>
    </div>
  )
}
