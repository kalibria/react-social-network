import React from "react";
import s from './MessageArea.module.css'
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";


const MessageArea = (props) => {
    let newMessageElement = React.createRef();

    let addMessage = () => {
       props.addMessage(newMessageElement)
    };
    let updateNewMessage = () => {
        props.updateNewMessage(newMessageElement)
    };

    return (
            <div className={s.massageArea}>
                <textarea ref={newMessageElement} placeholder="Enter your message" onChange={ updateNewMessage } />
                <div>
                <button onClick={ addMessage }>Sent</button>
                </div>
            </div>

    )
}

export default MessageArea;