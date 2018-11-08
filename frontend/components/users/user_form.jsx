import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';

class UserForm extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            username: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(type) {
        return (event) => this.setState({[type]: event.target.value})
    }

    login() {
        this.props.login({user: this.state})
    }

    render() {
        const { username, password } = this.state;
        return (
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" value={username}
                        onChange={this.handleChange("username")}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" 
                        value={password} 
                        onChange={this.handleChange("password")}/>
                </div>
                <button type="submit" className="btn btn-primary" 
                    onClick={this.login.bind(this)}>
                    Submit</button>
                <Link to="/credentials">Forgot Username or Password?</Link>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user))
})

export default connect(null, mapDispatchToProps)(UserForm)