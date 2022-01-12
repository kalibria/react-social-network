import React from "react";
import styles from './ProfileHeader.module.css';
import Preloader from "../../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileHeader = ({profile,status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={styles.userInfo}>
                <div className={styles.descriptionBlock}>
                    <img src={profile.photos.large}/>

                </div>
                <p>{profile.fullName}</p>
                <p>{profile.aboutMe}</p>
                <div className={styles.contacts}>
                    <p>{profile.contacts.facebook}</p>
                    <p>{profile.contacts.instagram}</p>
                    <p>{profile.contacts.youtube}</p>
                    <p>{profile.contacts.github}</p>
                </div>
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    )
}

export default ProfileHeader;