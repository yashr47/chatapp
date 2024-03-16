import { makeid } from "../utils"

export const chatReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_CHAT': {
            const chatName = prompt("Enter Name of chat")
            if(!chatName) {
                return state
            }
            let key = makeid()
            const allChats = state.chats || {}
            while(key in allChats) {
                key = makeid()
            }
            allChats[key] = {
                id: key,
                title: chatName,
                image: `https://dummyimage.com/100X100/000000/fff&text=${chatName.slice(0,2).toUpperCase()}`,
                messages: []
            }
            return {...state, chats: allChats, currentChatId: key}
        }
        case 'CHANGE_MAIN_CHAT': {
            const id = action.payload
            return {...state, currentChatId: id}
        }
        case 'SEND_MESSAGE': {
            const {id, message} = action.payload
            const newState = {...state}
            const activeChat = newState.chats[id]
            activeChat.messages.push(message)
            return newState
        }
        case 'DELETE_CHAT': {
            const id = action.payload
            const confirm = window.confirm("Are you sure you want to delete this chat?")
            if(confirm) {
                const newState = {...state}
                delete newState.chats[id]
                newState.currentChatId = null
                return newState
            } else return state
        }
        default:
            return state
    }

}