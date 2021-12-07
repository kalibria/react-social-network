import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {getAuthMe} from "../../api/api";

class HeaderComponent extends React.Component {
    componentDidMount() {
        getAuthMe().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                this.props.setAuthUserData(id, email, login) }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapPropsToState = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default  connect(mapPropsToState, {setAuthUserData})(HeaderComponent)
// export default HeaderComponent;




