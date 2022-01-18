import React from "react";
import styles from './ProfileHeader.module.css';
import Preloader from "../../../common/preloader/Preloader";
import userPhoto from "../../../assets/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileHeader = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={styles.userInfo}>
                <div className={styles.descriptionBlock}>
                    <img src={profile.photos.large || userPhoto} className={styles.mainPhoto}/>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
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