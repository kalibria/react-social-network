import React from "react";
import {
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    follow
} from "../../redux/usersReducer";
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from "../../common/preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsersSuperSelector
} from "../../redux/users-selectors";



class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize)
    };

    onPageChange = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChange={this.onPageChange}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       users={this.props.users}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingInProgress={this.props.followingInProgress}
                />
            </>)
    }
}

let mapStateToProps = (state) => {
    return {
        users:getUsersSuperSelector(state),
        // users:getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}



export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers
    })
)(UsersContainer)
