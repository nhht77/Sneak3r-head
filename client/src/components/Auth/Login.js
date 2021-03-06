import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import React, { Component } from 'react';
import TextFieldGroup from '../Common/TextFieldGroup';

import { loginUser } from '../../actions/authAction';


export class Login extends Component {

    constructor(){
        super();
        this.state = {
            email:'',
            password:'',
            errors:{}
        }
    }
    
    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
          };
        
        this.props.loginUser(userData);
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

  componentDidMount = () => {
    if(this.props.auth.isAuthenticated){
        this.props.history.push('/');
    }
  }

  componentWillReceiveProps = props => {
      if(props.auth.isAuthenticated){
        this.props.history.push('/');
      }
  }
  
  render() {

    const {errors} = this.props; 

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
                        <TextFieldGroup 
                            label="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            type="email"
                            error = {errors.email}/>

                        <TextFieldGroup 
                            label="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            type="password"
                            error = {errors.password}/>

                            <button>Log in</button>
                        </form>
                        </div>
                </div>
            </div>
        </div>
        </div>    
    )
  }
}

const mapStatetoProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStatetoProps, {loginUser})(Login);