import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileHeader from "./ProfileHeader/ProfileHeader";

const Profile = (props) => {
    return  <div className={styles.content}>
        <ProfileHeader />
        <MyPosts posts={props.post.posts}
                 newPostText = {props.post.newPostText}
                 addPost = {props.addPost}
                 updateNewPostText={props.updateNewPostText} />
    </div>
}

export default Profile;