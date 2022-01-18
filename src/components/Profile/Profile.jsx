import React from "react";
import styles from './Profile.module.css';
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";


const Profile = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    return <div className={styles.content}>
        <ProfileHeader isOwner={isOwner}
                       profile={profile}
                       status={status}
                       updateStatus={updateStatus}
                       savePhoto={savePhoto}/>
        <MyPostsContainer/>
    </div>
}

export default Profile;