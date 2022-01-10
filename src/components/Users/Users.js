import React from "react";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";


let Users = ({totalUsersCount, pageSize, currentPage, onPageChange, users, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChange={onPageChange} totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
            <div>
                {users.map(u => <User key={u.id}
                                      user={u}
                                      followingInProgress={props.followingInProgress}
                                      unfollow={props.unfollow}
                                      follow={props.follow}
                />)}
            </div>
        < /div>
    )
}

export default Users;