import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import MessageArea from "./MessageArea";
import {connect} from "react-redux";



const MapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageElement) => {
            if (newMessageElement.current.value !== '') {
                dispatch(addMessageActionCreator())
                newMessageElement.current.value = '';
            }
        },
        updateNewMessage: (newMessageElement) => {
            dispatch(updateNewMessageActionCreator(newMessageElement.current.value))
        }
    }
}

const MessageAreaContainer = connect (MapStateToProps, MapDispatchToProps) (MessageArea);

export default MessageAreaContainer;