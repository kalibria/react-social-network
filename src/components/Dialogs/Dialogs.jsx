import React from "react";
import s from './Dialogs.module.css'
import {NavLink, Redirect} from "react-router-dom";
import MessageAreaContainer from "./MessageAreaContainer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


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

// const Dialogs = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const dialogElements = store.getState().dialogsPage.dialogs.map(
//                         d => <DialogItem name={d.name} id={d.id}/>
//                     )
//
//                     const messageElements = store.getState().dialogsPage.messages.map(
//                         (m => <MessageItem message={m.message}/>)
//                     )
//
//                     return (
//                         <div className={s.dialogs}>
//                             <div className={s.dialogsItems}>
//                                 {dialogElements}
//                             </div>
//                             <div className={s.messages}>
//                                 {messageElements}
//                                 <MessageAreaContainer
//                                     // state={props.state}
//                                     // dispatch={props.dispatch}
//                                 />
//                             </div>
//                         </div>)
//                 }
//             }
//         </StoreContext.Consumer>
//
//     )
// }

let Dialogs = (props) => {
    let dialogElements = props.dialogElements.map(
        d => <DialogItem key={d.id} name={d.name} id={d.id}/>
    )

    let messageElements = props.messageElements.map(
        (m => <MessageItem key={m.id} message={m.message}/>)
    )

    if(!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <MessageAreaContainer />
            </div>
        </div>)

}

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

const mstp = (state) => {
    return {
        dialogElements: state.dialogsPage.dialogs,
        messageElements: state.dialogsPage.messages
    }
}

// Dialogs = connect(mstp)(AuthRedirectComponent)


export default compose(
    connect(mstp),
    withAuthRedirect)(Dialogs);