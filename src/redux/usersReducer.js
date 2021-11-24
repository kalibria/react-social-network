const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {
            id: 1,
            followed: true,
            fullName: 'Dmitry',
            status: 'Smile and the world smiles with you.',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Katerina',
            status: 'Happiness is homemade.....',
            location: {city: 'Paris', country: 'France'}
        },
        {
            id: 3,
            fullName: 'Alex',
            followed: false,
            status: 'My life ,my rule,that’s my attitude…',
            location: {city: 'Warsaw', country: 'Poland'}
        },
        {
            id: 4,
            followed: false,
            fullName: 'Vary',
            status: 'DON\'T FoRGet To Smile.',
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ]
}

    const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }return u
                })
            }
    }



        return state
    };

export const followAC = (userId) => ({type: FOLLOW, userId: userId});

export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId})


    export default usersReducer;