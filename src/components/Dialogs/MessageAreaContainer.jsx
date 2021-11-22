import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import MessageArea from "./MessageArea";
import {connect} from "react-redux";

//
// const MessageAreaContainer = () => {
//         return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let addMessage = (newMessageElement) => {
//                         if (newMessageElement.current.value !== '') {
//                             store.dispatch(addMessageActionCreator())
//                             newMessageElement.current.value = '';
//                         }
//                     };
//                     let updateNewMessage = (newMessageElement) => {
//                         store.dispatch(updateNewMessageActionCreator(newMessageElement.current.value))
//                     };
//                     return <MessageArea
//                         addMessage={addMessage}
//                         updateNewMessage={updateNewMessage}
//                     />
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

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