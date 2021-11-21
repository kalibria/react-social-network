import React from "react";
import Friend from "./Friend";
import StoreContext from "../../../../redux/context";

const FriendContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const { friends } = store.getState().navbar;

                    const friendElements = friends.map(friend => {
                        return <Friend
                            id={friend.id}
                            ava={friend.ava}
                            name={friend.name}
                        />
                    })

                    return friendElements;

                }
            }
        </StoreContext.Consumer>
    )
}

export default FriendContainer;