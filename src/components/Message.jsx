import React from 'react'

export const Message = ({data}) => {
  const {sender, content, time} = data
  const timeString = new Date(time).toLocaleTimeString('en-in') || 'Just Now'
  return (
    <div className={`message ${sender === 'self' ? 'self': ''}`}>
      <div className="message-info">
        <img alt={'profile'} src={`https://dummyimage.com/100X100/000000/fff&text=${sender === 'self' ? 'ME': sender.slice(0,2).toUpperCase()}`} />
        <span>{timeString}</span>
      </div>
      <div className="message-content">
        <p>{content}</p>
      </div>
    </div>
  )
}
