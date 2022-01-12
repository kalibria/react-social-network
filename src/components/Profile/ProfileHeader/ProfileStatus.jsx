import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditeMode = () => {
     console.log("status",this.props.status)
        this.setState({
            editMode: true
        })
    }

    deactivateEditeMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate = (prevProps, prevStatus) => {
        console.log("prevProps", prevProps.status, "prevStatus", this.props.status)
        if (prevProps.status !== this.props.status) {
            console.log('33')
            this.setState({
                status: this.props.status
            })
        }

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
                        <input value={this.state.status} onChange={this.onStatusChange} autoFocus={true}
                               onBlur={this.deactivateEditeMode}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;