import React, { Component } from 'react'

export class Register extends Component {
  render() {
    return (
        <div className="container">
            <div className="register-login-container">
                <div className="left">
                    <form onSubmit={ () => {}}>
                    <h2>Personal information</h2>
                        <div className="form-group-two">
                            <div className="group">
                            <div className="form-group">
                            <div className="label-inputs">Name</div>
                            <input type="text" />
                            </div>
                            </div>
                            <div className="group">
                            <div className="form-group">
                            <div className="label-inputs">Last Name</div>
                            <input type="text" />
                            </div>
                            </div>
                        </div>
                        <div className="group">
                            <div className="form-group">
                            <div className="label-inputs">Email</div>
                            <input type="text" />
                        </div>
                        <h2>Verify password</h2>
                        <div className="form-group-two">
                            <div className="group">
                            <div className="form-group">
                            <div className="label-inputs">Password</div>
                            <input type="password" />
                            </div>
                            </div>
                            <div className="group">
                            <div className="form-group">
                            <div className="label-inputs">Confirm Password</div>
                            <input type="password" />
                            </div>
                            </div>
                        </div>
                        <div>
                            <button>
                                Create an account
                            </button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>     
    )
  }
}

export default Register