import axios from "axios";


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': process.env.REACT_APP_API_KEY
    }
});


export const usersAPI = {
    getUsers (currentPage, pageSize ) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
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
                return response.data
            })
    },
    getUserProfile(userID){
        console.warn('Deprecated method. Please profileAPI object')
        return instance.get(`profile/${userID}`)
            .then(response => {
                return response.data
            })
    }

}

export const profileAPI = {
    getUserProfile(userID){
        return instance.get(`profile/${userID}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status/`, {status: status})
    }

}

export const AuthAPI = {
    me(){
        return instance.get('auth/me')
            .then(response => {
                return response.data
            })
    },
    login(email, password, rememberMe = false){
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout(){
        return instance.delete('auth/login')
    }

}
