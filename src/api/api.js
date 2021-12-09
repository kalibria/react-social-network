import axios from "axios";


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'cf7a4d00-3f1d-4865-b928-e17127a85f18'
    }
});
//
// export const getUsers = (currentPage, pageSize ) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(response => {
//             return response.data
//         })
// }

export const usersAPI = {
    getUsers (currentPage, pageSize ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getAuthMe() {
        return instance.get('auth/me')
            .then(response => {
                return response.data
            })
    },
    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    postFollow(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => {
                console.log('response',response)
                return response.data
            })
    }

}

// export const getAuthMe = () => {
//     return instance.get('auth/me')
//         .then(response => {
//             return response.data
//         })
// }

// export const deleteFollow = (userId) => {
//     return instance.delete(`follow/${userId}`)
//         .then(response => {
//             return response.data
//         })
// }

// export const postFollow = (userId) => {
//     return instance.post(`follow/${userId}`, {})
//         .then(response => {
//             console.log('response',response)
//             return response.data
//         })
// }