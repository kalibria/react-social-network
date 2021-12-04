import React from "react";
import styles from './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userId;
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userID)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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

export default connect (mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);