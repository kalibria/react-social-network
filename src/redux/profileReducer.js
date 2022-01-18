import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
    posts: [
        {id: "1", post: "It's my first post", likesCount: "15"},
        {id: "2", post: "Hello world!!!", likesCount: "25"},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: "3",
                post: action.newPostText,
                likesCount: "0"
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: "",
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }

        default:
            return state;
    }

}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
};

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status,
    }
}

export const deletePostActionCreator = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}

export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    }
}

export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
};

export const getUserProfile = (userID) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userID)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getStatus = (userID) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userID);
        dispatch(setStatus(response.data))
    }
}


export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
}

export default profileReducer;