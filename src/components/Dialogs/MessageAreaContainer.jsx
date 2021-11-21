import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import MessageArea from "./MessageArea";
import StoreContext from "../../redux/context";


const MessageAreaContainer = () => {
        return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let addMessage = (newMessageElement) => {
                        if (newMessageElement.current.value !== '') {
                            store.dispatch(addMessageActionCreator())
                            newMessageElement.current.value = '';
                        }
                    };
                    let updateNewMessage = (newMessageElement) => {
                        store.dispatch(updateNewMessageActionCreator(newMessageElement.current.value))
                    };
                    return <MessageArea
                        addMessage={addMessage}
                        updateNewMessage={updateNewMessage}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

export default MessageAreaContainer;