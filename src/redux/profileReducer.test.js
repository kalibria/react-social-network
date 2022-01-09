import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profileReducer";

let state = {
    posts: [
        {id: "1", post: "It's my first post", likesCount: "15"},
        {id: "2", post: "Hello world!!!", likesCount: "25"},
    ]
}

test('length of posts should incremented', () => {
    //1. test data
    let action = addPostActionCreator("it-kamasutra.com");

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect (newState.posts.length).toBe(3);
});

test('message of new post should correct', () => {
    //1. test data
    let action = addPostActionCreator("it-kamasutra.com");

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect (newState.posts[2].post).toBe("it-kamasutra.com");
});

test('after deleting length of posts should be decrement ', () => {
    //1. test data
    let action = deletePostActionCreator(1);

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect (newState.posts.length).toBe(1);
});

test('after deleting length should not be decrement if id is incorrect', () => {
    //1. test data
    let action = deletePostActionCreator(1000);

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect (newState.posts.length).toBe(2);
});

