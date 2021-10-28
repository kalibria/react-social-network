import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let messageElement = props.posts.map(el => <Post message={el.post} likesCount={el.likesCount} />)

    return (
        <div className={styles.postsSection}>
            <h3> My post </h3>
            <textarea></textarea>
            <div>
                <button>Add post</button>
            </div>
            <div className={styles.posts}>
                {messageElement}

            </div>
        </div>
    )
}

export default MyPosts;