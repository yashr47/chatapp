import React from "react";

export const AllChats = ({state, dispatch}) => {
    const {chats = {}} = state

    const handleChatChange = (id) => {
        dispatch({
            type: 'CHANGE_MAIN_CHAT',
            payload: id
        })
    }

    const getMessageString = (message) => {
        if(message.length > 35) return `${message.slice(0, 32)}...`
        return message
    }
    
    return (
        <div className="all-chats-container">
            {Object.keys(chats).map((key) => {
                const chat = chats[key]
                const msgString = chat.messages.length > 0 ? getMessageString(chat.messages[chat.messages.length - 1].content) : 'New Chat'
                return (
                    <div className="chat-container" onClick={() => handleChatChange(key)}>
                    <div className="chat">
                        <img className="profile-image" alt={`profile`} src={chat.image} />
                        <div className="chat-info">
                            <span className="chat-title">{chat.title}</span>
                            <span className="chat-message">{msgString}</span>
                        </div>
                    </div>
                    </div>
                );
            })}
        </div>
    );
};
