import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './login.css';


const Login = () => {
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
    {
        isAuthenticated ? (
            <div>
                <button onClick={() => logout({ returnTo: window.location.origin })} style={{ margin: "10px" }}>
                    Log Out
                </button>
            </div>
        ) : (
            <div>
                <button onClick={() => loginWithRedirect()}>Log In</button>
            </div>
        )
    }
    return (

        <div>
            <h1 className='heading'>Welcome to Shiv Tailoring House</h1>
            <p className='para'>Client Data Base</p>
            <button className='login_btn' onClick={() => loginWithRedirect()}>Click Here to Log In</button>
        </div>
    )
}

export default Login