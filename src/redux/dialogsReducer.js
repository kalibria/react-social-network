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
        case UPDATE_NEW_MESSAGE:{
            let stateCopy = {...state};
            stateCopy.newMessage = action.newMessage;
            return stateCopy;}
        case  ADD_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            let newMessageEl = {id: "6", message: state.newMessage}
            stateCopy.messages.push(newMessageEl);
            stateCopy.newMessage = "";
            return stateCopy;}
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