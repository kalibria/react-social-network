import React from "react";
import s from './MessageArea.module.css'
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/state";


const MessageArea = (props) => {
    let newMessageElement = React.createRef();

    let addMessage = () => {
        if (newMessageElement.current.value !== '') {
            props.dispatch(addMessageActionCreator())
            newMessageElement.current.value = '';
        }
    };
    let updateNewMessage = () => {
        props.dispatch(updateNewMessageActionCreator(newMessageElement.current.value))
    };

    return (
            <div className={s.massageArea}>
                <textarea ref={newMessageElement} placeholder="Enter your message" onChange={ updateNewMessage } />
                <div>
                <button onClick={ addMessage }>Add message</button>
                </div>
            </div>

    )
}

export default MessageArea;