import React from "react";

import MyPosts from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import StoreContext from "../../../../redux/context";

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let posts = store.getState().profilePage.posts
                    let newPostText = store.getState().profilePage.newPostText
                    let textPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let onPostChange = (text) => {
                        store.dispatch(updateNewPostTextActionCreator(text))
                    }
                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={textPost}
                        posts={posts}
                        newPostText={newPostText}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;