const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_CURRENT = 'SET_TOTAL_CURRENT'

let initialState = {
    users: [
    //     {
    //         id: 1,
    //         photoSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-HyJjjQayV6gWuZ4ogpxvpRhu_Mlxipu4Q&usqp=CAU',
    //         followed: true,
    //         fullName: 'Dmitry',
    //         status: 'Smile and the world smiles with you.',
    //         location: {city: 'Minsk', country: 'Belarus'}
    //     },
    //     {
    //         id: 2,
    //         photoSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-HyJjjQayV6gWuZ4ogpxvpRhu_Mlxipu4Q&usqp=CAU',
    //         followed: true,
    //         fullName: 'Katerina',
    //         status: 'Happiness is homemade.....',
    //         location: {city: 'Paris', country: 'France'}
    //     },
    //     {
    //         id: 3,
    //         photoSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-HyJjjQayV6gWuZ4ogpxvpRhu_Mlxipu4Q&usqp=CAU',
    //         fullName: 'Alex',
    //         followed: false,
    //         status: 'My life ,my rule,that’s my attitude…',
    //         location: {city: 'Warsaw', country: 'Poland'}
    //     },
    //     {
    //         id: 4,
    //         photoSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-HyJjjQayV6gWuZ4ogpxvpRhu_Mlxipu4Q&usqp=CAU',
    //         followed: false,
    //         fullName: 'Vary',
    //         status: 'DON\'T FoRGet To Smile.',
    //         location: {city: 'Kiev', country: 'Ukraine'}
    //     },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_CURRENT:
            return  {
                ...state,
                totalUsersCount: action.totalCurrent
            }
        default:
            return state
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalCurrent) => ({type: SET_TOTAL_CURRENT, totalCurrent})


export default usersReducer;