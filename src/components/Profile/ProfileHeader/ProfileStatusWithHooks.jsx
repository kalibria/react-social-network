import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    const activateEditeMode = () => {
          setEditMode(true)
    }
    const deactivateEditeMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (

        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditeMode}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input value={status} onChange={onStatusChange} onBlur={deactivateEditeMode} autoFocus={true}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;