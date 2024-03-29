import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'




const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(

  <Router> 
    <App />
    </Router>

)