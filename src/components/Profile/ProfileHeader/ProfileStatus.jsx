import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditeMode = () => {
        this.setState ({
            editMode: true
        })

    }

    deactivateEditeMode = () => {
        this.setState ({
            editMode: false
        })

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditeMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input value={this.props.status} autoFocus={true} onBlur={this.deactivateEditeMode} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;