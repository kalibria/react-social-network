import React from "react";
import {reduxForm} from "redux-form";
import { Field } from 'redux-form';
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import Redirect from "react-router-dom/es/Redirect";

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log('onsubmitttt')
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[required]} name={"email"} placeholder={"email"}/>
            </div>
            <div>
                <Field component={Input} validate={[required]} name={"password"} placeholder={"Password"} type={"password"}/>
            </div>
            <div>
                <Field component={Input} validate={[required]} name={"rememberMe"} type={"checkbox"}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default connect(mapStateToProps, {login})(Login)