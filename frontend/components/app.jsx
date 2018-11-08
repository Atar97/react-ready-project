import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Redirect, Switch } from 'react-router-dom';


import UserForm from './users/user_form';
import Navbar from './shared/navbar';

export default () => (
    <div>
        <Navbar />
        <div className='container'>
            <Switch>
                <AuthRoute path='/signin' component={UserForm} />
                <ProtectedRoute path="/curriculum" component={Curriculum} />
                <Redirect to="/" />
            </Switch>
        </div>
    </div>
)