const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let initialState = {
    dialogs: [
        {id: "1", name: "Dima"},
        {id: "2", name: "Katy"},
        {id: "3", name: "Sasha"},
        {id: "4", name: "Vany"},
        {id: "5", name: "Tany"},
        {id: "6", name: "Sergei"}
    ],
    messages: [
        {id: "1", message: "Hello"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "So what are you doing during the holidays?"},
        {id: "4", message: "I’m going to Thailand for 2 weeks"},
        {id: "5", message: "How about the food?"},

    ],
    newMessage: "",
}

const dialogsReducer = (state = initialState, action) => {
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