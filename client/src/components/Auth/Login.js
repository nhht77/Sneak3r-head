import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export class Login extends Component {

    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
    }
    
    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
          };
        
        console.log(userData);
        
        axios.post('/api/users/login', userData)
        .then(res =>  console.log(res.data))
        .catch(err => console.log(err.response.data));
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

  render() {
    return (
        <div className="page-wrapper">
        <div className="container">
            <div className="register-login-container">
                <div className="left">
                    <h1>New Customers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <Link
                    className='link-default'   
                    to={"/register"} >
                    Create An Account
                    </Link>
                </div>

                <div className="right">
                        <h1>Registered customers</h1>
                        <p>If you have an account please log in.</p>
                        <div className="signin-wrapper">
                        <form onSubmit={this.onSubmit}>
                        <div className="group">
                            <div className="form-group">
                                <div className="label-inputs">Email</div>
                                <input 
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    type="email" />
                                </div>
                            </div>

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
                            <button>
                                Log in
                            </button>
                        </form>
                        </div>
                </div>
            </div>
        </div>
        </div>    
    )
  }
}

export default Login
