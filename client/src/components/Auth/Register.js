import {connect} from 'react-redux';
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import TextFieldGroup from '../Common/TextFieldGroup';

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
            password: this.state.password,
            password2: this.state.password2
          };
        
        this.props.registerUser(userData, this.props.history);
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
    const {users} = this.props.auth;
    const {errors} = this.props;

    return (
        <div className="container">
            <div className="register-login-container">
                <div className="left">
                    <form onSubmit={this.onSubmit}>
                    <h2>Personal information {users ? users.firstname : null}</h2>
                        <div className="form-group-two">
                            <TextFieldGroup 
                                label="First Name (*)"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.onChange}
                                type="text"
                                error={errors.firstname}/>

                            <TextFieldGroup
                                label="Last Name"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.onChange}
                                type="text"/>
                        </div>
                        <TextFieldGroup
                            label="Email (*)"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            type="email"
                            error={errors.email}/>
                        
                        <h2>Verify password</h2>
                        <div className="form-group-two">
                            <TextFieldGroup 
                                label="Password (*)"
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange}
                                type="password"
                                error = {errors.password}/>

                            <TextFieldGroup 
                                label="Confirm Password (*)"
                                name="password2"
                                value={this.state.password2}
                                onChange={this.onChange}
                                type="password"
                                error = {errors.password2}/>
                        </div>
                        <div>
                            <button>
                                Create an account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>     
    )
  }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {registerUser})(withRouter(Register));
