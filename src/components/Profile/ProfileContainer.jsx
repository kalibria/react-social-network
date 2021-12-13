import React from "react";
import styles from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {
    componentDidMount() {
        console.log(1);
        let userID = this.props.match.params.userId;
        if(!userID) {
            userID = 2;
        }
        this.props.getUserProfile(userID)
        // usersAPI.getUserProfile(userID)
        // // axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userID)
        //     .then(data => {
        //         this.props.setUserProfile(data)
        //     })
    }


    render (){
        return <div className={styles.content}>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default compose(
    connect (mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)





