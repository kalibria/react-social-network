import React from "react";
import classes from './Friend.module.css';

const Friend = (props) => {
    const avaElements = <div key={props.id} className={classes.navbarAva}><img src={props.ava} /></div>;
    const nameElements = <p key={props.id} className={classes.navbarName}>{props.name}</p>;

    return (
        <div>
            {avaElements}
            {nameElements}
        </div>
    )
}

export default Friend;