import React, { Component } from 'react'
import axios from 'axios';

export class Register extends Component {

    constructor(){
        super();
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            password2:'',
        }
    }
    
    onSubmit = e => {
        e.preventDefault();

        const userData = {
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            email: this.state.email,
            password: this.state.password
          };
        
        console.log(userData);
        
        axios.post('/api/users/register', userData)
        .then(res =>  console.log(res.data))
        .catch(err => console.log(err.response.data));
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    
  render() {
    return (
        <div className="container">
            <div className="register-login-container">
                <div className="left">
                    <form onSubmit={this.onSubmit}>
                    <h2>Personal information</h2>
                        <div className="form-group-two">
                            <div className="group">
                            <div className="form-group">
                            <div className="label-inputs">Name</div>
                            <input
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.onChange}
                                type="text" />
                            </div>
                            </div>
                            <div className="group">
                            <div className="form-group">
                            <div className="label-inputs">Last Name</div>
                            <input 
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.onChange}
                                type="text" />
                            </div>
                            </div>
                        </div>
                        <div className="group">
                            <div className="form-group">
                            <div className="label-inputs">Email</div>
                            <input 
                                name="email"
                                value={this.state.email}
                                onChange={this.onChange}
                                type="email" />
                        </div>
                        <h2>Verify password</h2>
                        <div className="form-group-two">
                            <div className="group">
                            <div className="form-group">
                            <div className="label-inputs">Password</div>
                            <input 
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                                type="password" />
                            </div>
                            </div>
                            <div className="group">
                            <div className="form-group">
                            <div className="label-inputs">Confirm Password</div>
                            <input 
                                name="password2"
                                value={this.state.password2}
                                onChange={this.onChange}
                                type="password" />
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