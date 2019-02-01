import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
        <div className="page-wrapper">
        <div className="container">
            <div className="register-login-container">
                <div className="left">
                    <h1>New Customers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <button>Create An Account</button>
                </div>

                <div className="right">
                        <h1>Registered customers</h1>
                        <p>If you have an account please log in.</p>
                        <div className="signin-wrapper">
                        <div className="group">
                            <div className="form-group">
                                <div className="label-inputs">Password</div>
                                <input type="password" />
                                </div>
                            </div>

                        <div className="group">
                            <div className="form-group">
                                <div className="label-inputs">Password</div>
                                <input type="password" />
                                </div>
                            </div>
                        </div>
                        <button>
                            Log in
                        </button>
                </div>
            </div>
        </div>
        </div>    
    )
  }
}

export default Login
