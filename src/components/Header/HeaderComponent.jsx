import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthMe, logout} from "../../redux/authReducer";


class HeaderComponent extends React.Component {


    render() {
        return <Header {...this.props}/>
    }
}

let mapPropsToState = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default  connect(mapPropsToState, {logout})(HeaderComponent)
// export default HeaderComponent;




