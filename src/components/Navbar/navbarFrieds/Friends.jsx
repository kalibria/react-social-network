import React from "react";
import classes from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    return (
        <div >
            <h3 className={classes.heading}>FRIENDS</h3>
            <div className={classes.friends}>
                {props.friends.map( friend => <Friend key={friend.id} name={friend.name} ava={friend.ava} className={classes.friend} />)}
            </div>


        </div>
    )
}

export default Friends;