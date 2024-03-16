import React from "react";

export const Header = ({state, dispatch}) => {
    const handleButtonClick = () => {
        dispatch({
            type: 'ADD_CHAT'
        })
    };
    return (
        <div className="header">
            <span className="all-messages-text">Messages</span>
            <button className="add-chat-button" onClick={handleButtonClick}>
                +
            </button>
        </div>
    );
};
