import React from "react";
import styles from './Profile.module.css';
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import MyPostsContainer, {MyReduxFormPost} from "./MyPosts/Post/MyPostsContainer";


const Profile = (props) => {

    return <div className={styles.content}>
        <ProfileHeader profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer />
    </div>
}

export default Profile;