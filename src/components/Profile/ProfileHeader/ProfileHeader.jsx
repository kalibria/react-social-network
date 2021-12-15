import React from "react";
import styles from './ProfileHeader.module.css';
import Preloader from "../../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"


const ProfileHeader = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div className={styles.header}>*/}
            {/*    <img*/}
            {/*        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoI82dQ4RRe2jJboyhw2sLZofK-Kt8GhMQMg&usqp=CAU'/>*/}
            {/*</div>*/}
            <div className={styles.userInfo}>
                <div className={styles.descriptionBlock}>
                    <img src={props.profile.photos.large}/>

                </div>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
                <div className={styles.contacts}>
                    <p>{props.profile.contacts.facebook}</p>
                    <p>{props.profile.contacts.instagram}</p>
                    <p>{props.profile.contacts.youtube}</p>
                    <p>{props.profile.contacts.github}</p>
                </div>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}

export default ProfileHeader;