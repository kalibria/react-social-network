import React from "react";

import MyPosts from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";

const MyPostsContainer = (props) => {
    let textPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return <MyPosts
        updateNewPostText={onPostChange}
        addPost={textPost}
        posts={props.posts}
        newPostText={props.newPostText}
    />
}

export default MyPostsContainer;