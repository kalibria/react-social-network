import {AuthAPI, usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
   userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
               ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});

export const getAuthMe = () => {
    return (dispatch) => {
        AuthAPI.me().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch (setAuthUserData(id, email, login, true)) }
        })
    }
}

export const login = (email, password, rememberMe) => {
    console.log("login")
    return (dispatch) => {
        AuthAPI.login(email, password, rememberMe).then(response => {
            console.log("response", response)
            if (response.data.resultCode === 0) {
                dispatch (getAuthMe()) }
        })
    }
}

export const logout = () => (dispatch) => {
    return (dispatch) => {
        AuthAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch (setAuthUserData(null, null, null, false)) }
        })
    }
}


export default authReducer;