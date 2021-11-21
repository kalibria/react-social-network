import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import MessageArea from "./MessageArea";


const MessageAreaContainer = (props) => {
    // let newMessageElement = React.createRef();

    let addMessage = (newMessageElement) => {
        if (newMessageElement.current.value !== '') {
            props.dispatch(addMessageActionCreator())
            newMessageElement.current.value = '';
        }
    };
    let updateNewMessage = (newMessageElement) => {
        props.dispatch(updateNewMessageActionCreator(newMessageElement.current.value))
    };

    return (
          <MessageArea addMessage={addMessage} updateNewMessage={updateNewMessage}/>

    )
}

export default MessageAreaContainer;