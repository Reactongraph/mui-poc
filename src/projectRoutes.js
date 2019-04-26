import React from 'react';
// import { Switch, Route, Router } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Home from './Home';
import SignUp from './modules/signUp';
import SignIn from './modules/signIn';

// Switch between one screen to another screen

const history = createHistory()

const ProjectRoutes = (props) => {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={props => <Home {...props} />}
                />
                <Route
                    exact
                    path="/signin"
                    component={props => <SignIn {...props} />}
                />
                <Route
                    exact
                    path="/signup"
                    component={props => <SignUp {...props} />}
                />
            </Switch>
        </Router>
    )
}

export default ProjectRoutes;
