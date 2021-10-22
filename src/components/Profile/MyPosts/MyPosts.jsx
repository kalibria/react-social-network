import React from "react";
import styles from './MyPosts.module.css';
import post from './Post/Post';
import Post from "./Post/Post";

const MyPosts = () => {
    return  <div>
        My post
        <div>
            New post
        </div>
        <div className={styles.posts}>
            <Post message="It's my first post" likesCount='likes 15' />
            <Post message="Hi, how are you?"  likesCount='likes 20' />

        </div>
    </div>
}

export default MyPosts;