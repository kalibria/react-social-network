import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        {id: "1", post: "It's my first post", likesCount: "15"},
        {id: "2", post: "Hello world!!!", likesCount: "25"},
    ],
    newPostText: "it-kamasutra.com",
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: "3",
                post: state.newPostText,
                likesCount: "0"
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const updateNewPostTextActionCreator = (value) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: value
    }
};
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status,
    }
}

export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
};

export const getUserProfile = (userID) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userID)
            .then(data => {
                dispatch (setUserProfile(data))
            })
    }
}

export const getStatus = (userID) => {
    return (dispatch) => {
        profileAPI.getStatus(userID)
            .then(response => {
                dispatch (setStatus(response.data))
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch (setStatus(status))
                }
            })
    }
}

export default profileReducer;