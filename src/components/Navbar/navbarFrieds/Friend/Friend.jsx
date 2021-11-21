import React from "react";
import classes from './Friend.module.css';

const Friend = ({ id, name, ava }) => {
    return (
        <div>
            <div key={id} className={classes.navbarAva}>
                <img src={ava} />
            </div>
            <p key={id} className={classes.navbarName}>{name}</p>
        </div>
    )
}

export default Friend;