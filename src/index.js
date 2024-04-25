import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ProjectRoutes from './projectRoutes'


// ReactDOM.render(<ProjectRoutes />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ProjectRoutes />
);
