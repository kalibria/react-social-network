import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";


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

const maxLength10 = maxLengthCreator(10);

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.postsSection}>
            <Field name={"newPostText"} component={Textarea}
                   placeholder={"Enter yore post..."} validate={[required, maxLength10]}/>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}
export const MyReduxFormPosts = reduxForm({form: 'post'})(MyPostForm)

export default MyPosts;

