import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let textPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        props.updateNewPostText(newPostElement.current.value)
    }
    let messageElement = props.posts.map(el => <Post message={el.post} likesCount={el.likesCount}/>)

    return (
        <div className={styles.postsSection}>
            <h3> My post </h3>
            <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
            <div>
                <button onClick={textPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {messageElement}

            </div>
        </div>
    )
}

export default MyPosts;