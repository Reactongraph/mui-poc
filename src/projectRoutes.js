import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import SignUp from './modules/signUp';
import SignIn from './modules/signIn';

// Switch between one screen to another screen



const ProjectRoutes = (props) => {
    return (
        <Router >
            <Routes>
                <Route
                    
                    path="/"
                    element={<Home {...props} />}
                />
                <Route
                    
                    path="/signin"
                    element={<SignIn {...props} />}
                />
                <Route
                    
                    path="/signup"
                    element={<SignUp {...props} />}
                />
            </Routes>
        </Router>
    )
}

export default ProjectRoutes;
