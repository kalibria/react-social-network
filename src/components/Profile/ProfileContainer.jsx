import React from "react";
import styles from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        let userID = this.props.match.params.userId;
        if (!userID) {
            userID = this.props.authorizedUserId;
            if (!userID) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userID)
        this.props.getStatus(userID)
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevStatus, snapsShot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }


    render() {
        return <div className={styles.content}>
            <Profile  {...this.props}
                      isOwner={!this.props.match.params.userId}
                      profile={this.props.profile}
                      status={this.props.status}
                      updateStatus={this.props.updateStatus}
                      savePhoto={this.props.savePhoto}/>
        </div>
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)





