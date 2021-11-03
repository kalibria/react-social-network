import React from "react";
import s from './MessageArea.module.css'


const MessageArea = (props) => {

    let newMessageElement = React.createRef();
    let addMessage = () => {
        alert(newMessageElement.current.value)
    }
    return (
            <div className={s.massageArea}>
                <textarea ref={newMessageElement}></textarea>
                <div>
                <button onClick={ addMessage }>Add message</button>
                </div>
            </div>

    )
}

export default MessageArea;