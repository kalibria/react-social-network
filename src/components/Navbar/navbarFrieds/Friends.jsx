import React from "react";
import classes from './Friends.module.css';
import FriendContainer from "./Friend/FriendContainer";

const Friends = () => {
    return (
        <div>
            <h3 className={classes.heading}>FRIENDS</h3>
            <div className={classes.friends}>
                <FriendContainer/>
            </div>
        </div>
    )
}

export default Friends;