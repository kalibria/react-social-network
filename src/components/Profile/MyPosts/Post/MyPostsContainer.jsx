import React from "react";
import MyPosts, {MyReduxFormPosts} from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import {connect} from "react-redux";


// const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let posts = store.getState().profilePage.posts
//                     let newPostText = store.getState().profilePage.newPostText
//                     let textPost = () => {
//                         store.dispatch(addPostActionCreator())
//                     }
//                     let onPostChange = (text) => {
//                         store.dispatch(updateNewPostTextActionCreator(text))
//                     }
//                     return <MyPosts
//                         updateNewPostText={onPostChange}
//                         addPost={textPost}
//                         posts={posts}
//                         newPostText={newPostText}
//                     />
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }
//

const MapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,

    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect (MapStateToProps, MapDispatchToProps) (MyReduxFormPosts)

export default MyPostsContainer;

