import React from 'react'
import { AllMessages } from './AllMessages'
import { MessageInput } from './MessageInput'

export const MainChat = ({state, dispatch}) => {
  const {currentChatId} = state
  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_CHAT',
      payload: id
    })
  }
  if(currentChatId){
    const {messages} = state.chats[currentChatId]
    return (
      <div className='main-chat'>
          <div className="main-chat-info">
              <div className="chat-name">{state.chats[currentChatId].title}</div>
              <button onClick={() => handleDelete(currentChatId)} className='delete-button'>Delete</button>
          </div>
          <AllMessages messages={messages} />
          <MessageInput state={state} dispatch={dispatch} />
      </div>
    )
  }
  else return (
    <div className='main-chat'>
          <div className="main-chat-info"></div>
          <div className='empty-chat'>
      Pick a chat from left sidebar, or start a new chat
    </div>
      </div>

  )
}
