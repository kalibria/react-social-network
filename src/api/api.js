import axios from "axios";

export const getUsers = (currentPage, pageSize ) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {withCredentials: true})
        .then(response => {
            return response.data
        })
}

export const getAuthMe = () => {
    return axios.get('https://social-network.samuraijs.com/api/1.0//auth/me',
        {withCredentials: true})
        .then(response => {
            return response.data
        })
}