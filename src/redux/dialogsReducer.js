const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMessage;
            return state;
        case  ADD_MESSAGE:
            let newMessageEl = {id: "6", message: state.newMessage}
            state.messages.push(newMessageEl);
            state.newMessage = "";
            return state;
        default:
            return state;
    }
}

export const updateNewMessageActionCreator = (value) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage: value,
    }
};
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
};

export default dialogsReducer;