import React from 'react';
import { Link } from 'react-router-dom';

class UserForm extends React.Component {
    render() {
        return <form>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary" 
                onClick={this.login.bind(this)}>
                Submit</button>
            <Link to="/credentials">Forgot Username or Password?</Link>
          </form>;
    }
}

export default UserForm