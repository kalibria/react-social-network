import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthMe, logout} from "../../redux/authReducer";


class HeaderComponent extends React.Component {
    componentDidMount() {
        this.props.getAuthMe()
        // usersAPI.getAuthMe().then(data => {
        //     if (data.resultCode === 0) {
        //         let {id, email, login} = data.data
        //         this.props.setAuthUserData(id, email, login) }
        // })
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapPropsToState = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default  connect(mapPropsToState, {getAuthMe, logout})(HeaderComponent)
// export default HeaderComponent;




