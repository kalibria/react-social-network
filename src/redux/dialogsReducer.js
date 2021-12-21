const ADD_MESSAGE = "ADD-MESSAGE";


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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody
    }
};

export default dialogsReducer;