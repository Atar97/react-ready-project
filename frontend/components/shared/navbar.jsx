import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';

class Navbar extends React.Component {

    logout(event) {
        event.preventDefault()
        this.props.logout()
    }

    render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">Home</Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/signin">Sign In</Link>
                </li>
                <li className="nav-item">
                    <a onClick={this.logout.bind(this)}
                        className="nav-link" href="#" >Sign Out</a>
                </li>
            </ul>
          </nav>;
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
})

export default connect(null, mapDispatchToProps)(Navbar);