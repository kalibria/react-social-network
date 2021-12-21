import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
    let messageElement = props.posts.map(el => <Post message={el.post} likesCount={el.likesCount}/>)

    const addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div>
            <h3> My post </h3>
            <MyReduxFormPosts onSubmit={addNewPost}/>
            <div className={styles.posts}>
                {messageElement}
            </div>
        </div>)
}


const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.postsSection}>
            <Field name={"newPostText"} component={"textarea"}
                   placeholder={"Enter yore post..."}/>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}
export const MyReduxFormPosts = reduxForm({form: 'post'})(MyPostForm)

export default MyPosts;

