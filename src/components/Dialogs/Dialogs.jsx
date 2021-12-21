import React from "react";
import s from './Dialogs.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {reduxForm} from "redux-form";
import {Field} from 'redux-form';
import {addMessageActionCreator } from "../../redux/dialogsReducer";


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


let Dialogs = (props) => {
    let dialogElements = props.dialogElements.map(
        d => <DialogItem key={d.id} name={d.name} id={d.id}/>
    )

    let messageElements = props.messageElements.map(
        (m => <MessageItem key={m.id} message={m.message}/>)
    )

    if (!props.isAuth) return <Redirect to={'/login'}/>

    const addNewMessage =(values) => {
        props.addMessage(values.newMessageBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <MessageAreaReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>)
}


const mstp = (state) => {
    return {
        dialogElements: state.dialogsPage.dialogs,
        messageElements: state.dialogsPage.messages
    }
}

const mdtp = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody))
        }
    }
}

export const DialogsContainer = compose(
    connect(mstp, mdtp),
    withAuthRedirect)(Dialogs);


const MessageAreaForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} type={"text"} name={"newMessageBody"} placeholder={"Enter yore message..."}/>
            </div>
            <div>
                <button>Send</button>
            </div>

        </form>
    )
}

export const MessageAreaReduxForm = reduxForm({form: 'messageForm'})(MessageAreaForm)