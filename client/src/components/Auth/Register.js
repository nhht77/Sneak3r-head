import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import { registerUser } from '../../actions/authAction';

export class Register extends Component {

    constructor(){
        super();
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            password2:'',
            errors:{}
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
        
        this.props.registerUser(userData)
        // axios.post('/api/users/register', userData)
        // .then(res =>  console.log(res.data))
        // .catch(err => {
        //     this.setState({errors: err.response.data})});
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }
    
  render() {
    const {errors} = this.state;
    const {users} = this.props.auth;

    return (
        <div className="container">
            <div className="register-login-container">
                <div className="left">
                    <form onSubmit={this.onSubmit}>
                    <h2>Personal information {users ? users.firstname : null}</h2>
                        <div className="form-group-two">
                            <div className="group">
                            <div className="form-group">
                            <div className="label-inputs">First Name</div>
                            <input
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.onChange}
                                type="text" />
                            {errors.firstname && <div className="error-label">{errors.firstname}</div>}
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
                            {errors.email && <div className="error-label">{errors.email}</div>}
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
                            {errors.password && <div className="error-label">{errors.password}</div>}
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
                            {errors.password && <div className="error-label">{errors.password}</div>}
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

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {registerUser})(Register);
