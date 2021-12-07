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

export const deleteFollow = (userId) => {

    return axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`, {
        withCredentials: true,
        headers: {
            'API-KEY': 'cf7a4d00-3f1d-4865-b928-e17127a85f18'
        }})
        .then(response => {
            return response.data
        })
}

export const postFollow = (userId) => {

    return axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`, {}, {
        withCredentials: true,
        headers: {
            'API-KEY': 'cf7a4d00-3f1d-4865-b928-e17127a85f18'
        }})
        .then(response => {
            console.log('response',response)
            return response.data
        })
}