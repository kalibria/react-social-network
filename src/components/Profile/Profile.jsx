import React from "react";
import styles from './Profile.module.css';
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import MyPostsContainer, {MyReduxFormPost} from "./MyPosts/Post/MyPostsContainer";


const Profile = ({profile, status, updateStatus}) => {

    return <div className={styles.content}>
        <ProfileHeader profile={profile} status={status} updateStatus={updateStatus}/>
        <MyPostsContainer />
    </div>
}

export default Profile;