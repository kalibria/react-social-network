import React from "react";
import Friend from "./Friend";
import {connect} from "react-redux";

let FriendContainer = (props) => {

    const friends = props.friends;

    return friends.map(friend => {
            return <Friend
                id={friend.id}
                ava={friend.ava}
                name={friend.name}
            />
        }
    )
}

const MapStateToProps = (state) => {
    return {
        friends: state.navbar.friends
    }
}

// FriendContainer = connect(MapStateToProps)(FriendContainer)

export default connect(MapStateToProps)(FriendContainer);