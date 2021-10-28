import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

// let dialogs =[
//     {id:"1", name: "Dima"},
//     {id:"2", name: "Katy"},
//     {id:"3", name: "Sasha"},
//     {id:"4", name: "Vany"},
//     {id:"5", name: "Tany"},
//     {id:"6", name: "Sergei"}
// ]
//
// let messages = [
//     {id: "1", message: "Hello"},
//     {id: "2", message: "How are you?"}
// ]

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
    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageElements = props.messages.map((m => <MessageItem message={m.message}/>))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>

    )
}

export default Dialogs;