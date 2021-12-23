import React from "react";
import {reduxForm} from "redux-form";
import { Field } from 'redux-form';
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[required]} name={"login"} placeholder={"Login"}/>
            </div>
            <div>
                <Field component={Input} validate={[required]} name={"password"} placeholder={"Password"}/>
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

export default Login