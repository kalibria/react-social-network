import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";
import {addPostActionCreator} from "../../../redux/profileReducer";

// const MyPosts = (props) => {
//     let newPostElement = React.createRef();
//     let textPost = () => {
//         props.addPost();
//     }
//     let onPostChange = () => {
//         props.updateNewPostText(newPostElement.current.value)
//     }
//     let messageElement = props.posts.map(el => <Post message={el.post} likesCount={el.likesCount}/>)
//
//     return (
//         <div className={styles.postsSection}>
//             <h3> My post </h3>
//             <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
//             <div>
//                 <button onClick={textPost}>Add post</button>
//             </div>
//             <div className={styles.posts}>
//                 {messageElement}
//
//             </div>
//         </div>
//     )
// }


const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let textPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        props.updateNewPostText(newPostElement.current.value)
    }
    let messageElement = props.posts.map(el => <Post message={el.post} likesCount={el.likesCount}/>)

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <form onSubmit={props.handleSubmit} className={styles.postsSection}>
            <h3> My post </h3>
            <Field name={"post"} component={"textarea"} value={props.newPostText} placeholder={"Enter yore post..."}/>
            <div>
                <button onClick={textPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {messageElement}

            </div>
        </form>
    )
}
export const MyReduxFormPosts = reduxForm({form: 'post'})(MyPosts)

export default MyPosts;

