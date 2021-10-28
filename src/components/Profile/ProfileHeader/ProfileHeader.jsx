import React from "react";
import styles from './ProfileHeader.module.css';


const ProfileHeader = (props) => {
    return (
    <div className={styles.header}>
        <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoI82dQ4RRe2jJboyhw2sLZofK-Kt8GhMQMg&usqp=CAU'/>
    </div>
    )
}

export default ProfileHeader;