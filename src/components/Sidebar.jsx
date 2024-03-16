import React from 'react'
import { Header } from './Header'
import { AllChats } from './AllChats'

export const Sidebar = ({state, dispatch}) => {
  return (
    <div className='sidebar'>
        <Header state={state} dispatch={dispatch} />
        <AllChats state={state} dispatch={dispatch} />
    </div>
  )
}
