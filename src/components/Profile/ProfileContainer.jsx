import React from "react";
import styles from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userId;
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);