import React from "react";

const Login = () => {
    return <div>
        <h1>Login</h1>
        <div>
            <input placeholder={"Login"}/>
        </div>
        <div>
            <input placeholder={"Password"}/>
        </div>
        <div>
            <input type={"checbox"} />remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </div>
}

export default Login