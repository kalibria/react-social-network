import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import MessageArea from "./MessageArea";
import MessageAreaContainer from "./MessageAreaContainer";

const DialogItem = (props) => {
    let link = '/messages/' + props.id;

    return (
        <div className={s.dialogItem}>
            <NavLink to={link}>
                {props.name}
            </NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return <div className={s.messageItem}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageElements = props.state.messages.map((m => <MessageItem message={m.message} />))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <MessageAreaContainer state={props.state} dispatch={props.dispatch}/>
            </div>
        </div>

    )
}

export default Dialogs;