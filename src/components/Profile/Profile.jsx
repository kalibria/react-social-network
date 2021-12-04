import React from "react";
import styles from './Profile.module.css';
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";

const Profile = (props) => {
     // debugger;
    return <div className={styles.content}>
        <ProfileHeader profile={props.profile}/>
        <MyPostsContainer />
    </div>
}

export default Profile;