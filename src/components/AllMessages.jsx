import React, { useEffect, useRef } from 'react'
import { Message } from './Message'

export const AllMessages = ({messages}) => {
  const messageRef = useRef(null)

  useEffect(() => {
    messageRef.current.scrollTop = messageRef.current.scrollHeight
  })
  return (
    <div className='all-messages' ref={messageRef}>
      {
        messages.map(message => {
          return <Message key={message.time} data={message} />
        })
      }
    </div>
  )
}
