import React from "react";
import styles from './Profile.module.css';
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";

const Profile = (props) => {
    return <div className={styles.content}>
        <ProfileHeader/>
        <MyPostsContainer />
    </div>
}

export default Profile;